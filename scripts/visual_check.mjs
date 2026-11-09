import { spawn } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const PAGES = ['index', 'questions', 'systems', 'explore', 'interviews', 'practice', 'profile'];
const CHROME = process.env.CHROME_BIN || 'google-chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function chromeArgs(userDir) {
  return [
    '--headless=new', '--disable-gpu', '--disable-software-rasterizer', '--disable-dev-shm-usage',
    '--no-sandbox', '--no-first-run', '--no-default-browser-check', '--disable-background-networking',
    '--disable-component-update', '--disable-sync', '--metrics-recording-only',
    '--allow-file-access-from-files', '--disable-web-security', '--disable-site-isolation-trials',
    '--hide-scrollbars', '--force-device-scale-factor=1', '--remote-debugging-port=0',
    '--remote-allow-origins=*', `--user-data-dir=${userDir}`, '--window-size=500,844', 'about:blank',
  ];
}

async function main() {
  const userDir = mkdtempSync(join(tmpdir(), 'interview-os-cdp-'));
  if (typeof globalThis.WebSocket !== 'function') {
    throw new Error('Node.js 22+ with global WebSocket is required');
  }
  const chrome = spawn(CHROME, chromeArgs(userDir), { stdio: ['ignore', 'pipe', 'pipe'] });
  let output = '';
  let spawnError = null;
  chrome.stdout.on('data', (d) => { output += d.toString(); });
  chrome.stderr.on('data', (d) => { output += d.toString(); });
  chrome.on('error', (e) => { spawnError = e; });
  let port = null;
  for (let i = 0; i < 100 && !port; i++) {
    if (spawnError) break;
    try {
      const active = readFileSync(join(userDir, 'DevToolsActivePort'), 'utf8').trim().split(/\r?\n/)[0];
      if (active && /^\d+$/.test(active)) port = Number(active);
    } catch (e) {}
    if (!port) {
      const m = output.match(/DevTools listening on ws:\/\/(?:127\.0\.0\.1|localhost|\[::1\]|0\.0\.0\.0):(\d+)\//);
      if (m) port = Number(m[1]);
    }
    if (!port) await sleep(100);
  }
  if (!port) {
    chrome.kill('SIGTERM');
    throw new Error('Chrome DevTools port not detected: ' + (spawnError ? String(spawnError) : output.slice(-400)));
  }

  let target = null;
  for (let i = 0; i < 50 && !target; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/list`);
      const list = await res.json();
      target = list.find((x) => x.type === 'page' && x.webSocketDebuggerUrl);
    } catch (e) {}
    if (!target) await sleep(100);
  }
  if (!target) {
    chrome.kill('SIGTERM');
    throw new Error('No Chrome page target available');
  }

  const ws = new globalThis.WebSocket(target.webSocketDebuggerUrl);
  await new Promise((res, rej) => {
    ws.addEventListener('open', res, { once: true });
    ws.addEventListener('error', rej, { once: true });
  });
  let seq = 0;
  const pending = new Map();
  let pageErrors = [];
  ws.addEventListener('message', (ev) => {
    const msg = JSON.parse(String(ev.data));
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
      return;
    }
    if (msg.method === 'Runtime.exceptionThrown') {
      pageErrors.push('exception: ' + String(msg.params.exceptionDetails?.text || 'unknown'));
    } else if (msg.method === 'Log.entryAdded' && msg.params.entry?.level === 'error') {
      const text = String(msg.params.entry.text || '');
      if (!text.includes('favicon')) pageErrors.push('log: ' + text);
    } else if (msg.method === 'Runtime.consoleAPICalled' && msg.params.type === 'error') {
      pageErrors.push('console: ' + (msg.params.args || []).map((a) => String(a.value || a.description || '')).join(' '));
    }
  });
  const send = (method, params = {}) => new Promise((resolve) => {
    const id = ++seq;
    pending.set(id, resolve);
    ws.send(JSON.stringify({ id, method, params }));
  });

  const result = { pages: [], hardErrors: [], warnings: [] };
  try {
    await send('Page.enable');
    await send('Runtime.enable');
    await send('Log.enable');
    await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
    for (const page of PAGES) {
      pageErrors = [];
      await send('Page.navigate', { url: `file://${ROOT}/web/${page}.html` });
      await sleep(1200);
      const expr = `JSON.stringify((()=>{const de=document.documentElement,b=document.body,vw=de.clientWidth;const off=[...b.querySelectorAll('body *')].map(e=>{const r=e.getBoundingClientRect();return {cls:String(e.className||''),right:Math.round(r.right),left:Math.round(r.left),text:(e.textContent||'').trim().slice(0,40)};}).filter(x=>(x.right>vw+1||x.left<-1)&&!String(x.cls).includes('skip-link'));return {page:document.body.dataset.page,innerWidth:window.innerWidth,vw:vw,scrollWidth:de.scrollWidth,bodyScroll:b.scrollWidth,outside:off.slice(0,8)};})())`;
      const ev = await send('Runtime.evaluate', { expression: expr, returnByValue: true });
      const value = ev.result?.result?.value;
      const data = value ? JSON.parse(value) : { page, error: 'no evaluation result' };
      result.pages.push({ ...data, consoleErrors: pageErrors.slice() });
      if (data.error) result.hardErrors.push(`${page}: ${data.error}`);
      if (Number(data.scrollWidth) > Number(data.vw) + 1) result.hardErrors.push(`${page}: document scrollWidth ${data.scrollWidth} > viewport ${data.vw}`);
      if ((data.outside || []).length) result.hardErrors.push(`${page}: ${data.outside.length} elements outside 390px viewport`);
      if (pageErrors.length) result.hardErrors.push(`${page}: ${pageErrors.length} console errors`);
    }
  } finally {
    try { ws.close(); } catch (e) {}
    chrome.kill('SIGTERM');
    try { rmSync(userDir, { recursive: true, force: true }); } catch (e) {}
  }
  console.log(JSON.stringify(result));
  if (result.hardErrors.length) process.exit(1);
}

main().catch((e) => {
  console.log(JSON.stringify({ hardErrors: [String(e && e.message || e)], pages: [], warnings: [] }));
  process.exit(1);
});
