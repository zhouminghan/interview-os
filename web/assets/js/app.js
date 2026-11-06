(function () {
  "use strict";
  const D = window.OS_DATA || { questions: [], interviews: [], stats: {}, domains: {} };
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const debounce = (fn, ms) => {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  const ICONS = {
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    chevronL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    chevronR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.14v13.72c0 .78.85 1.27 1.52.88l11.03-6.86a1.04 1.04 0 0 0 0-1.76L9.52 4.26A1.04 1.04 0 0 0 8 5.14z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
    reset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/></svg>'
  };

  function initTheme() {
    const saved = localStorage.getItem("os-theme");
    const theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  }

  function renderNav() {
    const page = document.body.dataset.page;
    const links = [
      ["index", "总览", "index.html"],
      ["questions", "问题库", "questions.html"],
      ["systems", "系统图解", "systems.html"],
      ["interviews", "面经", "interviews.html"],
      ["practice", "训练", "practice.html"],
      ["profile", "画像", "profile.html"]
    ];
    $("#topbar").innerHTML =
      '<div class="topbar-inner">' +
        '<a class="brand" href="index.html"><span class="brand-dot"></span>Interview OS</a>' +
        '<div class="global-search" id="gs">' +
          '<input class="search gs-input" id="gs-input" type="search" placeholder="搜索分类 / 面经 / 八股 / 问题" aria-label="全局搜索" autocomplete="off">' +
          '<div class="gs-dropdown" id="gs-dropdown" hidden></div>' +
        '</div>' +
        '<nav class="nav-links" aria-label="主导航">' +
          links.map(([key, label, href]) =>
            '<a class="nav-link' + (key === page ? " active" : "") + '" href="' + href + '" data-nav="' + key + '">' + label + "</a>"
          ).join("") +
        "</nav>" +
        '<button class="icon-btn" id="theme-toggle" aria-label="切换主题"></button>' +
      "</div>";
    const toggle = $("#theme-toggle");
    const syncIcon = () => { toggle.innerHTML = document.documentElement.dataset.theme === "dark" ? ICONS.sun : ICONS.moon; };
    syncIcon();
    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("os-theme", next);
      syncIcon();
    });
    initGlobalSearch();
  }

  function initGlobalSearch() {
    const input = $("#gs-input");
    const dd = $("#gs-dropdown");
    if (!input || !dd) return;
    const domainKeys = Object.keys(D.stats.domains || {});

    function results(query) {
      const q = query.trim().toLowerCase();
      if (!q) return null;
      const domains = domainKeys
        .filter((k) => domainLabel(k).toLowerCase().includes(q) || k.toLowerCase().includes(q))
        .slice(0, 5);
      const interviews = D.interviews
        .filter((iv) => ((iv.company || "") + " " + (iv.business || "") + " " + (iv.position || "") + " " + (iv.date || "")).toLowerCase().includes(q))
        .slice(0, 5);
      const questions = D.questions
        .filter((x) => (x.question + " " + x.id + " " + (x.topic || []).join(" ")).toLowerCase().includes(q))
        .slice(0, 6);
      return { domains: domains, interviews: interviews, questions: questions, total: domains.length + interviews.length + questions.length };
    }

    function render() {
      const g = results(input.value);
      if (!g || !g.total) { dd.hidden = true; dd.innerHTML = ""; return; }
      let html = "";
      if (g.domains.length) {
        html += '<div class="gs-group">分类</div>' + g.domains.map((k) =>
          '<a class="gs-item" href="questions.html?domain=' + encodeURIComponent(k) + '"><span class="gs-title">' + esc(domainLabel(k)) + '</span><span class="gs-meta">' + (D.stats.domains[k] || 0) + " 题</span></a>").join("");
      }
      if (g.interviews.length) {
        html += '<div class="gs-group">面经</div>' + g.interviews.map((iv) =>
          '<a class="gs-item" href="interviews.html?iv=' + encodeURIComponent(iv.interview_id) + '"><span class="gs-title">' + esc(iv.company || "") + " · " + esc(iv.business || "") + '</span><span class="gs-meta">' + esc(iv.date || "") + "</span></a>").join("");
      }
      if (g.questions.length) {
        html += '<div class="gs-group">问题 / 八股</div>' + g.questions.map((x) =>
          '<a class="gs-item" href="questions.html#' + encodeURIComponent(x.id) + '"><span class="gs-title">' + esc(x.question) + '</span><span class="gs-meta">' + (x.source_type === "knowledge" ? "八股 · " : "") + esc(domainLabel(x.domain)) + "</span></a>").join("");
      }
      dd.innerHTML = html;
      dd.hidden = false;
    }

    input.addEventListener("input", debounce(render, 120));
    input.addEventListener("focus", render);
    input.addEventListener("keydown", (e) => { if (e.key === "Escape") { dd.hidden = true; input.blur(); } });
    document.addEventListener("click", (e) => { if (!e.target.closest("#gs")) dd.hidden = true; });
  }

  const typeLabel = (t) => (t === "technical" ? "技术" : "项目");
  const diffStars = (n) => ["", "★", "★★", "★★★", "★★★★", "★★★★★"][Math.min(5, Math.max(0, Number(n) || 0))];
  const domainLabel = (d) => (D.domains[d] && D.domains[d].label) || d;
  const questionMap = () => { const m = {}; D.questions.forEach((q) => { m[q.id] = q; }); return m; };

  function tagsHTML(q) {
    return '<span class="tag ' + (q.type === "technical" ? "tech" : "proj") + '">' + esc(typeLabel(q.type)) + "</span>" +
      '<span class="tag">' + esc(domainLabel(q.domain)) + "</span>" +
      (q.difficulty ? '<span class="tag">难度 ' + diffStars(q.difficulty) + "</span>" : "") +
      (q.frequency ? '<span class="tag ' + (q.frequency === "high" ? "high" : "mid") + '">' + (q.frequency === "high" ? "高频" : "中频") + "</span>" : "") +
      (q.source_type === "knowledge" ? '<span class="tag kw">八股</span>' : "") +
      (q.needs_personal_input ? '<span class="tag warn">待补个人</span>' : "");
  }

  function interviewCard(iv) {
    return '<a class="interview-card interview-link" href="interviews.html?iv=' + encodeURIComponent(iv.interview_id) + '">' +
      '<span class="interview-main">' +
        '<span class="interview-head"><b>' + esc(iv.company || "") + " · " + esc(iv.business || "") + '</b><span class="muted">' + esc(iv.date || "") + '</span></span>' +
        '<span class="interview-sub">' + esc(iv.position || "") + '</span>' +
      '</span>' +
      '</a>';
  }

  /* ---------- Diagram renderer (native HTML + SVG, no deps) ---------- */

  const SVG_NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs) {
    const e = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach((k) => e.setAttribute(k, attrs[k]));
    return e;
  }

  function diagramStageMeta(title) {
    const known = {
      "一句话": { kind: "pitch", short: "一句话" },
      "30 秒回答": { kind: "short", short: "30 秒" },
      "1 分钟回答": { kind: "medium", short: "1 分钟" },
      "参考回答": { kind: "deep", short: "参考" },
      "追问": { kind: "followup", short: "追问" },
      "回答框架": { kind: "framework", short: "框架" },
      "要点": { kind: "points", short: "要点" },
      "面试官原问题": { kind: "origin", short: "原题" }
    };
    return known[title] || { kind: "generic", short: title || "概述" };
  }

  function sectionCardsHTML(q) {
    const secs = q.sections && q.sections.length ? q.sections : null;
    if (!secs) return q.body_html || "";
    return secs.map((s, i) => {
      const hasDiag = !!s.diagram;
      return '<section class="qa-section">' +
        '<h3 class="qa-section-title"><span class="qa-num">' + String(i + 1).padStart(2, "0") + "</span>" + esc(s.title || "概述") +
        (hasDiag ? '<span class="qa-badge">图</span>' : "") + "</h3>" +
        '<div class="qa-section-body">' + (s.html || "") + "</div>" +
        (hasDiag ? '<div class="qa-diagram dg-scroll"><div class="dg" data-diagram="' + i + '"></div></div>' : "") +
      "</section>";
    }).join("");
  }

  function mountSectionDiagrams(root, q) {
    const secs = q.sections || [];
    $$(".dg", root).forEach((el) => {
      const idx = Number(el.dataset.diagram);
      const d = secs[idx] && secs[idx].diagram;
      if (d) mountDiagram(el, d);
    });
  }

  function mountDiagram(el, d) {
    el.classList.add("dg-mounted");
    if (d.type === "seq") renderSeqDiagram(el, d);
    else renderFlowDiagram(el, d);
  }

  function drawArrow(svg, sx, sy, tx, ty, opts) {
    opts = opts || {};
    const dx = tx - sx;
    const dy = ty - sy;
    let pathD;
    let c2x, c2y;
    if (opts.straight) {
      pathD = "M" + sx + " " + sy + " L" + tx + " " + ty;
      c2x = sx;
      c2y = sy;
    } else {
      let c1x, c1y;
      if (Math.abs(dy) > Math.abs(dx)) {
        c1x = sx; c1y = sy + dy * 0.45;
        c2x = tx; c2y = ty - dy * 0.45;
      } else {
        c1x = sx + dx * 0.45; c1y = sy;
        c2x = tx - dx * 0.45; c2y = ty;
      }
      pathD = "M" + sx + " " + sy + " C " + c1x + " " + c1y + ", " + c2x + " " + c2y + ", " + tx + " " + ty;
    }
    const path = svgEl("path", { d: pathD, fill: "none" });
    path.classList.add("dg-edge");
    if (opts.color) path.classList.add("dg-c-" + opts.color);
    if (opts.dashed) path.setAttribute("stroke-dasharray", "6 5");
    svg.appendChild(path);

    let vx = tx - c2x, vy = ty - c2y;
    if (Math.hypot(vx, vy) < 0.001) { vx = dx; vy = dy; }
    const L = Math.hypot(vx, vy) || 1;
    vx /= L; vy /= L;
    const px = -vy, py = vx;
    const alen = 9, spread = 5;
    const poly = svgEl("polygon", { points: [tx, ty, tx - vx * alen + px * spread, ty - vy * alen + py * spread, tx - vx * alen - px * spread, ty - vy * alen - py * spread].join(" ") });
    poly.classList.add("dg-arrow");
    if (opts.color) poly.classList.add("dg-c-" + opts.color);
    svg.appendChild(poly);
  }

  function renderFlowDiagram(container, d) {
    container.classList.add("dg-flow", d.direction === "TB" ? "dg-tb" : "dg-lr");
    const nodes = d.nodes || [];
    const edges = d.edges || [];
    const groups = d.groups || [];
    const byId = {};
    nodes.forEach((n) => { byId[n.id] = n; });

    const rank = {};
    const indeg = {};
    const adj = {};
    nodes.forEach((n) => { rank[n.id] = 0; indeg[n.id] = 0; adj[n.id] = []; });
    const validEdges = edges.filter((e) => byId[e.from] && byId[e.to] && e.from !== e.to);
    validEdges.forEach((e) => { indeg[e.to]++; adj[e.from].push(e.to); });
    const queue = nodes.filter((n) => indeg[n.id] === 0).map((n) => n.id);
    const placed = new Set();
    while (queue.length) {
      const id = queue.shift();
      if (placed.has(id)) continue;
      placed.add(id);
      adj[id].forEach((next) => {
        rank[next] = Math.max(rank[next], rank[id] + 1);
        if (--indeg[next] === 0) queue.push(next);
      });
    }

    const byRank = {};
    nodes.forEach((n) => {
      const r = rank[n.id] || 0;
      (byRank[r] = byRank[r] || []).push(n.id);
    });
    const ranks = Object.keys(byRank).map(Number).sort((a, b) => a - b);

    const nodeEls = {};
    nodes.forEach((n) => {
      const el = document.createElement("div");
      el.className = "dg-node" + (n.shape ? " dg-shape-" + n.shape : " dg-shape-box") + (n.color ? " dg-c-" + n.color : "");
      el.dataset.id = n.id;
      el.innerHTML = '<span class="dg-node-label">' + esc(n.label || n.id) + "</span>" +
        (n.note ? '<span class="dg-node-note">' + esc(n.note) + "</span>" : "");
      container.appendChild(el);
      nodeEls[n.id] = el;
    });

    const sizes = {};
    nodes.forEach((n) => { const r = nodeEls[n.id].getBoundingClientRect(); sizes[n.id] = { w: r.width, h: r.height }; });

    const gapX = 52, gapY = 22, pad = 28;
    const pos = {};
    let totalW = pad * 2, totalH = pad * 2;

    if (d.direction === "TB") {
      let y = pad;
      ranks.forEach((r) => {
        const ids = byRank[r];
        const maxH = Math.max.apply(null, ids.map((id) => sizes[id].h));
        let cx = pad;
        ids.forEach((id) => { pos[id] = { x: cx, y: y + (maxH - sizes[id].h) / 2 }; cx += sizes[id].w + gapX; });
        totalW = Math.max(totalW, cx - gapX + pad);
        y += maxH + gapY;
      });
      totalH = y - gapY + pad;
    } else {
      let x = pad;
      const colPos = {};
      let maxColH = 0;
      ranks.forEach((r) => {
        const ids = byRank[r];
        const maxW = Math.max.apply(null, ids.map((id) => sizes[id].w));
        let y = pad;
        ids.forEach((id) => { colPos[id] = { y: y }; y += sizes[id].h + gapY; });
        maxColH = Math.max(maxColH, y - gapY);
        byRank[r].forEach((id) => { pos[id] = { x: x + (maxW - sizes[id].w) / 2, y: colPos[id].y }; });
        x += maxW + gapX;
      });
      totalH = pad * 2 + maxColH;
      totalW = x - gapX + pad;
    }

    nodes.forEach((n) => {
      const p = pos[n.id] || { x: pad, y: pad };
      nodeEls[n.id].style.left = p.x + "px";
      nodeEls[n.id].style.top = p.y + "px";
    });

    groups.forEach((g) => {
      const members = (g.nodes || []).map((id) => nodeEls[id]).filter(Boolean);
      if (!members.length) return;
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      members.forEach((el) => {
        const p = pos[el.dataset.id];
        const s = sizes[el.dataset.id];
        minX = Math.min(minX, p.x); minY = Math.min(minY, p.y);
        maxX = Math.max(maxX, p.x + s.w); maxY = Math.max(maxY, p.y + s.h);
      });
      const grp = document.createElement("div");
      grp.className = "dg-group";
      grp.style.left = (minX - 12) + "px";
      grp.style.top = (minY - 16) + "px";
      grp.style.width = (maxX - minX + 24) + "px";
      grp.style.height = (maxY - minY + 26) + "px";
      if (g.label) grp.innerHTML = '<span class="dg-group-label">' + esc(g.label) + "</span>";
      container.appendChild(grp);
    });

    const svg = svgEl("svg", { class: "dg-svg" });
    svg.setAttribute("viewBox", "0 0 " + totalW + " " + totalH);
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    container.appendChild(svg);

    validEdges.forEach((e) => {
      const a = pos[e.from], b = pos[e.to];
      if (!a || !b) return;
      const sa = sizes[e.from], sb = sizes[e.to];
      let sx, sy, tx, ty;
      if (d.direction === "TB") {
        sx = a.x + sa.w / 2; sy = a.y + sa.h;
        tx = b.x + sb.w / 2; ty = b.y;
      } else {
        sx = a.x + sa.w; sy = a.y + sa.h / 2;
        tx = b.x; ty = b.y + sb.h / 2;
      }
      drawArrow(svg, sx, sy, tx, ty, { color: e.color, dashed: e.dashed, straight: false });
      if (e.label) {
        const lbl = document.createElement("div");
        lbl.className = "dg-edge-label" + (e.color ? " dg-c-" + e.color : "");
        lbl.textContent = e.label;
        const mx = (sx + tx) / 2, my = (sy + ty) / 2;
        lbl.style.left = mx + "px";
        lbl.style.top = my + "px";
        container.appendChild(lbl);
      }
    });

    container.style.width = totalW + "px";
    container.style.height = totalH + "px";
  }

  function renderSeqDiagram(container, d) {
    container.classList.add("dg-seq");
    const actors = d.actors || [];
    const messages = d.messages || [];
    const byId = {};
    actors.forEach((a) => { byId[a.id] = a; });
    const valid = messages.filter((m) => byId[m.from] && byId[m.to]);

    const actorEls = {};
    actors.forEach((a) => {
      const el = document.createElement("div");
      el.className = "dg-actor";
      el.innerHTML = '<span class="dg-actor-label">' + esc(a.label || a.id) + "</span>";
      container.appendChild(el);
      actorEls[a.id] = el;
    });

    const gap = 72;
    const topPad = 44;
    const rowH = 44;
    let x = 28;
    const ax = {};
    const widths = {};
    actors.forEach((a) => {
      const r = actorEls[a.id].getBoundingClientRect();
      widths[a.id] = r.width;
      ax[a.id] = x + r.width / 2;
      actorEls[a.id].style.left = x + "px";
      actorEls[a.id].style.top = "0px";
      x += r.width + gap;
    });
    const totalW = x - gap + 28;
    const totalH = topPad + valid.length * rowH + 28;
    container.style.width = totalW + "px";
    container.style.height = totalH + "px";

    const svg = svgEl("svg", { class: "dg-svg" });
    svg.setAttribute("viewBox", "0 0 " + totalW + " " + totalH);
    svg.setAttribute("preserveAspectRatio", "xMinYMin meet");
    container.appendChild(svg);

    actors.forEach((a) => {
      const x = ax[a.id];
      const line = svgEl("line", { x1: x, y1: 30, x2: x, y2: totalH - 16 });
      line.classList.add("dg-lifeline");
      svg.appendChild(line);
    });

    valid.forEach((m, i) => {
      const y = topPad + i * rowH + 8;
      const sx = ax[m.from], tx = ax[m.to];
      drawArrow(svg, sx, y, tx, y, { color: m.color, dashed: m.arrow === "-->" || m.arrow === "..>", straight: true });
      if (m.label) {
        const lbl = document.createElement("div");
        lbl.className = "dg-msg-label" + (m.color ? " dg-c-" + m.color : "");
        lbl.textContent = m.label;
        lbl.style.left = Math.min(sx, tx) + Math.abs(tx - sx) / 2 + "px";
        lbl.style.top = (y - 16) + "px";
        container.appendChild(lbl);
      }
      if (m.note) {
        const note = document.createElement("div");
        note.className = "dg-msg-note";
        note.textContent = m.note;
        note.style.left = Math.min(sx, tx) + Math.abs(tx - sx) / 2 + "px";
        note.style.top = (y + 10) + "px";
        container.appendChild(note);
      }
    });
  }

  /* ---------- Explorer (interactive learning) ---------- */

  function exploreStore() {
    try { return JSON.parse(localStorage.getItem("os.explore") || "{}"); } catch (e) { return {}; }
  }
  function saveExploreStore(s) { localStorage.setItem("os.explore", JSON.stringify(s)); }

  function stagesFor(q) {
    const secs = q.sections && q.sections.length ? q.sections : [];
    if (!secs.length) return [{ title: "回答", html: q.body_html || "", diagram: (q.diagrams && q.diagrams[0]) || null, kind: "generic" }];
    return secs.map((s) => {
      const meta = diagramStageMeta(s.title);
      return { title: s.title || "概述", short: meta.short, kind: meta.kind, html: s.html || "", diagram: s.diagram || null };
    });
  }

  function renderIndex() {
    const s = D.stats || {};
    const domainKeys = Object.keys(s.domains || {});
    const domains = domainKeys.map((k) => ({ k: k, n: s.domains[k] || 0 })).sort((a, b) => b.n - a.n);
    const maxN = domains.length ? domains[0].n : 1;
    const recent = D.interviews.slice(0, 3);
    $("#page").innerHTML =
      "<h1>Interview OS</h1>" +
      '<p class="lead">个人面试知识库 · 训练 · 表达 · 谈判</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="systems.html">系统图解</a><a class="btn btn-secondary" href="questions.html">浏览问题库</a><a class="btn btn-secondary" href="practice.html">随机训练</a></div>' +
      '<div class="stats">' +
        '<div class="stat"><b>' + (s.questions || 0) + "</b><span>标准化问题</span></div>" +
        '<div class="stat"><b>' + (s.interviews || 0) + "</b><span>原始面经</span></div>" +
        '<div class="stat"><b>' + domainKeys.length + "</b><span>领域</span></div>" +
      "</div>" +
      "<h2>领域榜单</h2>" +
      '<div class="rank-list">' +
        domains.map((d, i) =>
          '<a class="rank-row' + (i < 3 ? " top" : "") + '" href="questions.html?domain=' + encodeURIComponent(d.k) + '">' +
            '<span class="rank' + (i < 3 ? " top" : "") + '">' + (i + 1) + "</span>" +
            '<span class="rank-label">' + esc(domainLabel(d.k)) + "</span>" +
            '<span class="rank-count">' + d.n + ' 题<span class="rank-share">' + Math.round(d.n / Math.max(1, s.questions || 0) * 100) + "%</span></span>" +
            '<span class="rank-bar"><i style="width:' + Math.round(d.n / maxN * 100) + '%"></i></span>' +
          "</a>").join("") +
      "</div>" +
      "<h2>最近面经</h2>" +
      (recent.length ? '<div class="interview-list">' + recent.map(interviewCard).join("") + "</div>" : '<p class="muted">还没有面经。</p>');
  }

  function renderQuestions() {
    const params = new URLSearchParams(location.search);
    const state = { query: "", type: "all", domain: params.get("domain") || "all", selected: null };
    $("#page").innerHTML =
      "<h1>问题库</h1>" +
      '<div class="toolbar">' +
        '<input class="search" id="q-search" type="search" placeholder="搜索问题、主题或 ID" aria-label="搜索问题">' +
        '<div class="chips" id="q-type"></div>' +
        '<div class="chips" id="q-domain"></div>' +
      "</div>" +
      '<div class="split"><div class="q-list" id="q-list"></div><aside class="q-detail" id="q-detail" aria-live="polite"></aside></div>';

    function renderChips() {
      $("#q-type").innerHTML = [["all", "全部"], ["technical", "技术"], ["project", "项目"]].map(([v, l]) =>
        '<button class="chip' + (state.type === v ? " active" : "") + '" data-type="' + v + '">' + l + "</button>").join("");
      const keys = Object.keys(D.stats.domains || {});
      $("#q-domain").innerHTML = [["all", "全部领域"]].concat(keys.map((k) => [k, domainLabel(k)])).map(([v, l]) =>
        '<button class="chip' + (state.domain === v ? " active" : "") + '" data-domain="' + v + '">' + esc(l) + "</button>").join("");
    }

    function filtered() {
      return D.questions.filter((q) => {
        if (state.type !== "all" && q.type !== state.type) return false;
        if (state.domain !== "all" && q.domain !== state.domain) return false;
        if (state.query) {
          const hay = (q.question + " " + q.id + " " + (q.topic || []).join(" ")).toLowerCase();
          if (!hay.includes(state.query.toLowerCase())) return false;
        }
        return true;
      });
    }

    function highlight() { $$("#q-list .q-row").forEach((b) => b.classList.toggle("active", b.dataset.id === state.selected)); }

    function renderDetail(id) {
      const q = questionMap()[id];
      if (!q) { $("#q-detail").innerHTML = ""; return; }
      const srcs = (q.sources || []).map((s) => esc(s.company || "") + " · " + esc(s.position || "") + " · " + esc(s.date || "")).join(" / ");
      $("#q-detail").innerHTML =
        "<h2>" + esc(q.question) + "</h2>" +
        '<div class="tags">' + tagsHTML(q) + "</div>" +
        '<div class="q-body">' + sectionCardsHTML(q) + "</div>" +
        (q.diagrams && q.diagrams.length ? '<a class="btn btn-secondary btn-sm" href="explore.html?q=' + encodeURIComponent(q.id) + '">交互式学习</a>' : "") +
        (srcs ? '<div class="q-sources">来源：' + srcs + "</div>" : "");
      mountSectionDiagrams($("#q-detail"), q);
    }

    function renderList() {
      const list = filtered();
      const el = $("#q-list");
      if (!list.length) { el.innerHTML = '<p class="muted">没有匹配的问题。</p>'; return; }
      el.innerHTML = list.map((q, i) =>
        '<button class="q-row" data-id="' + esc(q.id) + '">' +
          '<span class="rank' + (i < 3 ? " top" : "") + '">' + (i + 1) + "</span>" +
          '<span class="q-title">' + esc(q.question) + "</span>" +
          '<span class="q-meta"><span class="q-id">' + esc(q.id) + "</span> · " + esc(domainLabel(q.domain)) + " · " + diffStars(q.difficulty) + "</span>" +
        "</button>").join("");
      if (!state.selected || !list.some((q) => q.id === state.selected)) state.selected = list[0].id;
      highlight();
      renderDetail(state.selected);
    }

    renderChips();
    renderList();
    if (location.hash && questionMap()[decodeURIComponent(location.hash.slice(1))]) {
      state.selected = decodeURIComponent(location.hash.slice(1));
      highlight();
      renderDetail(state.selected);
    }

    $("#q-search").addEventListener("input", debounce((e) => { state.query = e.target.value; renderList(); }, 120));
    $("#q-type").addEventListener("click", (e) => { const b = e.target.closest("[data-type]"); if (!b) return; state.type = b.dataset.type; renderChips(); renderList(); });
    $("#q-domain").addEventListener("click", (e) => { const b = e.target.closest("[data-domain]"); if (!b) return; state.domain = b.dataset.domain; renderChips(); renderList(); });
    $("#q-list").addEventListener("click", (e) => { const b = e.target.closest(".q-row"); if (!b) return; state.selected = b.dataset.id; highlight(); renderDetail(state.selected); });
  }

  function renderExplore() {
    const params = new URLSearchParams(location.search);
    const store = exploreStore();
    store.done = store.done || {};
    store.mastery = store.mastery || {};
    store.last = store.last || {};
    const state = {
      query: "",
      domain: params.get("domain") || "all",
      qid: null,
      stage: 0,
      stages: [],
      playing: false,
      speed: 1,
      timer: null
    };

    $("#page").innerHTML =
      "<h1>交互式学习</h1>" +
      '<div class="toolbar">' +
        '<input class="search" id="ex-search" type="search" placeholder="搜索问题、主题或 ID" aria-label="搜索场景">' +
        '<div class="chips" id="ex-domain"></div>' +
        '<span class="muted" id="ex-count"></span>' +
      "</div>" +
      '<div class="ex-shell">' +
        '<aside class="ex-pane ex-left"><div class="ex-pane-head"><span>场景</span></div><div class="ex-pane-body" id="ex-sidebar"></div></aside>' +
        '<main class="ex-pane ex-main" id="ex-main" aria-live="polite"></main>' +
        '<aside class="ex-pane ex-right" id="ex-right"></aside>' +
      "</div>";

    const domainKeys = Object.keys(D.stats.domains || {});
    const kindLabel = { pitch: "一句话", short: "30 秒", medium: "1 分钟", deep: "参考", followup: "追问", framework: "框架", points: "要点", origin: "原题", generic: "内容" };

    function renderDomainChips() {
      $("#ex-domain").innerHTML = [["all", "全部领域"]].concat(domainKeys.map((k) => [k, domainLabel(k)])).map(([v, l]) =>
        '<button class="chip' + (state.domain === v ? " active" : "") + '" data-domain="' + esc(v) + '">' + esc(l) + "</button>").join("");
    }

    function filtered() {
      return D.questions.filter((q) => {
        if (state.domain !== "all" && q.domain !== state.domain) return false;
        if (state.query) {
          const hay = (q.question + " " + q.id + " " + (q.topic || []).join(" ")).toLowerCase();
          if (!hay.includes(state.query.toLowerCase())) return false;
        }
        return true;
      });
    }

    function domainQuestionList() {
      if (state.domain === "all") return [];
      return D.questions.filter((q) => q.domain === state.domain);
    }

    function currentQuestion() { return questionMap()[state.qid]; }

    function questionItemHTML(q) {
      const m = store.mastery[q.id];
      return '<button class="ex-item' + (store.done[q.id] ? " done" : "") + '" data-id="' + esc(q.id) + '">' +
        '<span class="ex-item-dot"></span>' +
        '<span class="ex-item-main"><span class="ex-item-title">' + esc(q.question) + "</span>" +
        '<span class="ex-item-meta">' + esc(q.id) + " · " + esc(domainLabel(q.domain)) + (m != null ? " · 掌握 " + m + "/5" : "") + "</span></span>" +
      "</button>";
    }

    function renderSidebar() {
      const el = $("#ex-sidebar");
      if (state.query) {
        const list = filtered().slice(0, 400);
        $("#ex-count").textContent = list.length + " 个匹配";
        if (!list.length) { el.innerHTML = '<p class="muted">没有匹配的场景。</p>'; return; }
        el.innerHTML = list.map(questionItemHTML).join("");
        if (!list.some((q) => q.id === state.qid)) state.qid = list[0].id;
        highlightSidebar();
        return;
      }
      if (state.domain === "all") {
        $("#ex-count").textContent = domainKeys.length + " 个领域";
        el.innerHTML = domainKeys.map((k) => {
          const n = D.stats.domains[k] || 0;
          return '<button class="ex-item ex-domain-item" data-domain="' + esc(k) + '">' +
          '<span class="ex-item-dot"></span>' +
          '<span class="ex-item-main"><span class="ex-item-title">' + esc(domainLabel(k)) + "</span>" +
          '<span class="ex-item-meta">' + n + " 题</span></span></button>";
        }).join("");
        return;
      }
      const list = domainQuestionList();
      $("#ex-count").textContent = list.length + " 个场景";
      if (!list.length) { el.innerHTML = '<p class="muted">该领域暂无场景。</p>'; return; }
      el.innerHTML = list.map(questionItemHTML).join("");
      if (!list.some((q) => q.id === state.qid)) state.qid = list[0].id;
      highlightSidebar();
    }

    function highlightSidebar() {
      $$("#ex-sidebar .ex-item").forEach((b) => b.classList.toggle("active", b.dataset.id === state.qid));
    }

    function renderRight() {
      const q = currentQuestion();
      const el = $("#ex-right");
      if (!q) { el.innerHTML = ""; return; }
      const m = store.mastery[q.id];
      const srcs = (q.sources || []).map((s) => esc(s.company || "") + " · " + esc(s.position || "") + " · " + esc(s.date || "")).join("<br>");
      el.innerHTML =
        '<div class="ex-pane-head"><span>状态</span></div>' +
        '<div class="ex-pane-body">' +
          '<div class="ex-block"><span class="ex-block-label">掌握度</span><div class="ex-mastery">' +
            [0, 1, 2, 3, 4, 5].map((v) => '<button class="ex-m-btn' + (m === v ? " active" : "") + '" data-m="' + v + '">' + v + "</button>").join("") +
          "</div></div>" +
          '<div class="ex-block"><span class="ex-block-label">标签</span><div class="tags">' + tagsHTML(q) + "</div></div>" +
          '<div class="ex-block"><span class="ex-block-label">主题</span><div class="ex-topics">' + (q.topic || []).map((t) => '<span class="tag">' + esc(t) + "</span>").join("") + "</div></div>" +
          (srcs ? '<div class="ex-block"><span class="ex-block-label">来源</span><div class="ex-sources">' + srcs + "</div></div>" : "") +
        "</div>";
    }

    function syncControls() {
      const playBtn = $("#ex-play");
      if (playBtn) playBtn.innerHTML = state.playing ? ICONS.pause : ICONS.play;
      const db = $("#ex-done");
      const q = currentQuestion();
      if (db && q) {
        const done = !!store.done[q.id];
        db.textContent = done ? "已掌握" : "标记掌握";
        db.classList.toggle("btn-primary", done);
        db.classList.toggle("btn-secondary", !done);
      }
    }

    function renderMain() {
      const q = currentQuestion();
      const el = $("#ex-main");
      if (!q) { el.innerHTML = '<p class="muted">左侧选择一个场景开始。</p>'; return; }
      state.stage = Math.min(Math.max(state.stage, 0), state.stages.length - 1);
      const si = state.stage;
      const sec = state.stages[si] || state.stages[0];
      const total = state.stages.length;
      const klabel = kindLabel[sec.kind] || sec.short || "内容";
      const done = !!store.done[q.id];
      el.innerHTML =
        '<div class="ex-stage-head">' +
          '<span class="ex-stage-kind">' + esc(klabel) + "</span>" +
          "<h2>" + esc(q.question) + "</h2>" +
          '<div class="tags">' + tagsHTML(q) + "</div>" +
        "</div>" +
        '<div class="ex-stage">' +
          '<div class="ex-stage-title"><span class="ex-stage-idx">' + String(si + 1).padStart(2, "0") + "</span> " + esc(sec.title) + "</div>" +
          '<div class="ex-stage-body q-body">' + (sec.html || "") + "</div>" +
          (sec.diagram ? '<div class="ex-diagram dg-scroll"><div class="dg" id="ex-diagram"></div></div>' : "") +
        "</div>" +
        '<div class="ex-controls">' +
          '<button class="icon-btn" id="ex-prev" aria-label="上一阶段">' + ICONS.chevronL + "</button>" +
          '<button class="icon-btn" id="ex-play" aria-label="播放或暂停">' + (state.playing ? ICONS.pause : ICONS.play) + "</button>" +
          '<button class="icon-btn" id="ex-next" aria-label="下一阶段">' + ICONS.chevronR + "</button>" +
          '<button class="icon-btn" id="ex-reset" aria-label="回到第一阶段">' + ICONS.reset + "</button>" +
          '<button class="chip" id="ex-speed" data-speed="' + state.speed + '">' + state.speed + "×</button>" +
          '<span class="ex-progress"><b>' + String(si + 1) + "</b> / " + total + " · " + esc(sec.short || sec.title) + "</span>" +
          '<button class="btn btn-sm ' + (done ? "btn-primary" : "btn-secondary") + '" id="ex-done">' + (done ? "已掌握" : "标记掌握") + "</button>" +
        "</div>" +
        '<div class="ex-dots">' + state.stages.map((x, i) => '<button class="ex-dot' + (i === si ? " active" : "") + (i < si ? " seen" : "") + '" data-i="' + i + '" aria-label="第 ' + (i + 1) + ' 阶段"></button>').join("") + "</div>";
      if (sec.diagram) mountDiagram($("#ex-diagram"), sec.diagram);
    }

    function stopPlay() {
      if (state.timer) clearTimeout(state.timer);
      state.timer = null;
      state.playing = false;
      syncControls();
    }

    function goStage(i) {
      const q = currentQuestion();
      if (!q) return;
      state.stage = Math.min(Math.max(i, 0), state.stages.length - 1);
      store.last[q.id] = state.stage;
      saveExploreStore(store);
      renderMain();
    }

    function togglePlay() {
      if (state.playing) { stopPlay(); return; }
      state.playing = true;
      syncControls();
      scheduleNext();
    }

    function scheduleNext() {
      if (!state.playing) return;
      state.timer = setTimeout(() => {
        if (state.stage < state.stages.length - 1) {
          goStage(state.stage + 1);
          scheduleNext();
        } else {
          stopPlay();
        }
      }, Math.round(3000 / state.speed));
    }

    function cycleSpeed() {
      state.speed = state.speed === 1 ? 2 : state.speed === 2 ? 0.5 : 1;
      const b = $("#ex-speed");
      if (b) { b.dataset.speed = state.speed; b.textContent = state.speed + "×"; }
    }

    function toggleDone() {
      const q = currentQuestion();
      if (!q) return;
      if (store.done[q.id]) delete store.done[q.id];
      else store.done[q.id] = true;
      saveExploreStore(store);
      renderMain();
      renderSidebar();
    }

    function selectQuestion(id) {
      state.qid = id;
      const q = currentQuestion();
      if (!q) {
        $("#ex-main").innerHTML = '<div class="ex-empty"><p class="muted">左侧选择一个场景开始。</p></div>';
        $("#ex-right").innerHTML = "";
        return;
      }
      state.stages = stagesFor(q);
      state.stage = store.last[id] != null && store.last[id] < state.stages.length ? store.last[id] : 0;
      stopPlay();
      highlightSidebar();
      renderMain();
      renderRight();
    }

    renderDomainChips();
    renderSidebar();
    const initialQ = params.get("q");
    if (initialQ && questionMap()[initialQ]) {
      state.qid = initialQ;
      state.domain = questionMap()[initialQ].domain;
      renderDomainChips();
      renderSidebar();
    }
    else if (state.domain !== "all") {
      const list = domainQuestionList();
      if (list.length) state.qid = list[0].id;
    }
    selectQuestion(state.qid);
    const stageParam = Number(params.get("stage"));
    if (!Number.isNaN(stageParam)) goStage(stageParam);

    $("#ex-search").addEventListener("input", debounce((e) => { state.query = e.target.value; renderSidebar(); }, 120));
    $("#ex-domain").addEventListener("click", (e) => {
      const b = e.target.closest("[data-domain]");
      if (!b) return;
      state.domain = b.dataset.domain;
      state.query = "";
      const si = $("#ex-search");
      if (si) si.value = "";
      renderDomainChips();
      renderSidebar();
      const list = domainQuestionList();
      if (list.length) selectQuestion(list[0].id);
    });
    $("#ex-sidebar").addEventListener("click", (e) => {
      const b = e.target.closest(".ex-item");
      if (!b) return;
      if (b.dataset.domain) {
        state.domain = b.dataset.domain;
        state.query = "";
        const si = $("#ex-search");
        if (si) si.value = "";
        renderDomainChips();
        renderSidebar();
        const list = domainQuestionList();
        if (list.length) selectQuestion(list[0].id);
        return;
      }
      if (b.dataset.id) selectQuestion(b.dataset.id);
    });
    $("#ex-right").addEventListener("click", (e) => {
      const b = e.target.closest("[data-m]");
      if (!b) return;
      const q = currentQuestion();
      if (!q) return;
      const v = Number(b.dataset.m);
      if (store.mastery[q.id] === v) delete store.mastery[q.id];
      else store.mastery[q.id] = v;
      saveExploreStore(store);
      renderRight();
      renderSidebar();
    });
    $("#ex-main").addEventListener("click", (e) => {
      if (e.target.closest("#ex-prev")) { goStage(state.stage - 1); return; }
      if (e.target.closest("#ex-next")) { goStage(state.stage + 1); return; }
      if (e.target.closest("#ex-play")) { togglePlay(); return; }
      if (e.target.closest("#ex-reset")) { stopPlay(); goStage(0); return; }
      if (e.target.closest("#ex-speed")) { cycleSpeed(); return; }
      if (e.target.closest("#ex-done")) { toggleDone(); return; }
      const dot = e.target.closest(".ex-dot");
      if (dot) { stopPlay(); goStage(Number(dot.dataset.i)); }
    });
    document.addEventListener("keydown", (e) => {
      if (document.body.dataset.page !== "explore") return;
      if (e.target.closest("input, textarea, select")) return;
      if (e.code === "Space") { e.preventDefault(); togglePlay(); }
      else if (e.key === "ArrowRight") goStage(state.stage + 1);
      else if (e.key === "ArrowLeft") goStage(state.stage - 1);
      else if (e.key === "Escape") { stopPlay(); goStage(0); }
    });
  }

  function renderSystems() {
    const params = new URLSearchParams(location.search);
    const list = D.systems || [];
    const state = { selected: null, stage: 0, playing: false, speed: 1, timer: null, soc: { step: 0, hint: false, point: false } };
    let stageStore = {};
    try { stageStore = JSON.parse(localStorage.getItem("os.sys.stage") || "{}"); } catch (e) {}

    $("#page").innerHTML =
      "<h1>系统图解</h1>" +
      '<p class="lead">按阶段看架构、数据流与运行 SOP，而不是背题目。</p>' +
      '<div class="ex-shell">' +
        '<aside class="ex-pane ex-left"><div class="ex-pane-head"><span>系统</span></div><div class="ex-pane-body" id="sys-sidebar"></div></aside>' +
        '<main class="ex-pane ex-main" id="sys-main" aria-live="polite"></main>' +
        '<aside class="ex-pane ex-right" id="sys-right"></aside>' +
      "</div>";

    function current() { return list.find((s) => s.id === state.selected); }

    function renderSidebar() {
      const el = $("#sys-sidebar");
      if (!list.length) { el.innerHTML = '<p class="muted">还没有系统图解。</p>'; return; }
      el.innerHTML = list.map((s) => {
        return '<button class="ex-item' + (s.id === state.selected ? " active" : "") + '" data-id="' + esc(s.id) + '">' +
          '<span class="ex-item-dot"></span>' +
          '<span class="ex-item-main"><span class="ex-item-title">' + esc(s.title) + "</span>" +
          '<span class="ex-item-meta">' + esc(domainLabel(s.domain)) + " · " + s.stages.length + " 阶段 · " + s.diagram_count + " 图</span></span>" +
        "</button>";
      }).join("");
    }

    function highlightSidebar() {
      $$("#sys-sidebar .ex-item").forEach((b) => b.classList.toggle("active", b.dataset.id === state.selected));
    }

    function syncControls() {
      const playBtn = $("#sys-play");
      if (playBtn) playBtn.innerHTML = state.playing ? ICONS.pause : ICONS.play;
    }

    function socraticHTML(soc) {
      const steps = soc.steps || [];
      const i = state.soc.step;
      const st = steps[i];
      if (!st) return "";
      const hintShown = state.soc.hint;
      const pointShown = state.soc.point;
      return '<div class="soc">' +
        '<div class="soc-head"><span class="soc-label">苏格拉底引导</span><span class="soc-count">' + String(i + 1).padStart(2, "0") + " / " + steps.length + "</span></div>" +
        '<div class="soc-q">' + esc(st.q) + "</div>" +
        '<div class="soc-actions">' +
          (hintShown ? "" : '<button class="btn btn-secondary btn-sm soc-btn" data-soc="hint">显示提示</button>') +
          (hintShown && !pointShown ? '<button class="btn btn-primary btn-sm soc-btn" data-soc="point">显示要点</button>' : "") +
          (pointShown && i < steps.length - 1 ? '<button class="btn btn-secondary btn-sm soc-btn" data-soc="next">下一问</button>' : "") +
          (pointShown && i === steps.length - 1 ? '<span class="soc-done">已推导完成</span>' : "") +
        "</div>" +
        (hintShown ? '<div class="soc-hint"><b>提示</b> ' + esc(st.hint || "") + "</div>" : "") +
        (pointShown ? '<div class="soc-point"><b>要点</b> ' + esc(st.point || "") + "</div>" : "") +
        '<div class="soc-dots">' + steps.map((x, k) => '<span class="soc-dot' + (k === i ? " active" : "") + (k < i ? " seen" : "") + '"></span>').join("") + "</div>" +
      "</div>";
    }

    function renderMain() {
      const sys = current();
      const el = $("#sys-main");
      if (!sys) { el.innerHTML = '<p class="muted">左侧选择一个系统。</p>'; return; }
      const stages = sys.stages || [];
      if (!stages.length) { el.innerHTML = '<p class="muted">该系统还没有阶段内容。</p>'; return; }
      state.stage = Math.min(Math.max(state.stage, 0), stages.length - 1);
      const si = state.stage;
      const st = stages[si];
      el.innerHTML =
        '<div class="sys-head">' +
          '<span class="ex-stage-kind">' + esc(domainLabel(sys.domain)) + " · 系统图解</span>" +
          "<h2>" + esc(sys.title) + "</h2>" +
          '<div class="tags">' +
            (sys.topic || []).map((t) => '<span class="tag">' + esc(t) + "</span>").join("") +
            (sys.difficulty ? '<span class="tag">难度 ' + diffStars(sys.difficulty) + "</span>" : "") +
          "</div>" +
        "</div>" +
        '<div class="sys-stage">' +
          '<div class="ex-stage-title"><span class="ex-stage-idx">' + String(si + 1).padStart(2, "0") + "</span> " + esc(st.title) + "</div>" +
          (st.socratic ? socraticHTML(st.socratic) : (st.diagram ? '<div class="sys-diagram dg-scroll"><div class="dg" id="sys-diagram"></div></div>' : "") + '<div class="ex-stage-body q-body sys-stage-body">' + (st.html || "") + "</div>") +
        "</div>" +
        '<div class="ex-controls">' +
          '<button class="icon-btn" id="sys-prev" aria-label="上一阶段">' + ICONS.chevronL + "</button>" +
          '<button class="icon-btn" id="sys-play" aria-label="播放或暂停">' + (state.playing ? ICONS.pause : ICONS.play) + "</button>" +
          '<button class="icon-btn" id="sys-next" aria-label="下一阶段">' + ICONS.chevronR + "</button>" +
          '<button class="icon-btn" id="sys-reset" aria-label="回到第一阶段">' + ICONS.reset + "</button>" +
          '<button class="chip" id="sys-speed" data-speed="' + state.speed + '">' + state.speed + "×</button>" +
          '<span class="ex-progress"><b>' + String(si + 1) + "</b> / " + stages.length + " · " + esc(st.title) + "</span>" +
        "</div>" +
        '<div class="ex-dots">' + stages.map((x, i) => '<button class="ex-dot' + (i === si ? " active" : "") + (i < si ? " seen" : "") + '" data-i="' + i + '" aria-label="阶段 ' + (i + 1) + '"></button>').join("") + "</div>";
      if (st.diagram && !st.socratic) mountDiagram($("#sys-diagram"), st.diagram);
    }

    function renderRight() {
      const sys = current();
      const el = $("#sys-right");
      if (!sys) { el.innerHTML = ""; return; }
      const related = D.questions.filter((q) => q.domain === sys.domain).slice(0, 10);
      let html = '<div class="ex-pane-head"><span>关联题卡</span></div><div class="ex-pane-body">';
      if (!related.length) {
        html += '<p class="muted" style="padding:12px 14px">暂无关联题卡。</p>';
      } else {
        html += related.map((q) =>
          '<button class="ex-item" data-qid="' + esc(q.id) + '">' +
            '<span class="ex-item-dot"></span>' +
            '<span class="ex-item-main"><span class="ex-item-title">' + esc(q.question) + "</span>" +
            '<span class="ex-item-meta">' + esc(q.id) + (q.diagrams && q.diagrams.length ? " · 含图" : "") + "</span></span>" +
          "</button>").join("");
      }
      html += "</div>";
      el.innerHTML = html;
    }

    function stopPlay() {
      if (state.timer) clearTimeout(state.timer);
      state.timer = null;
      state.playing = false;
      syncControls();
    }

    function goStage(i) {
      const sys = current();
      if (!sys || !sys.stages || !sys.stages.length) return;
      state.stage = Math.min(Math.max(i, 0), sys.stages.length - 1);
      state.soc = { step: 0, hint: false, point: false };
      stageStore[sys.id] = state.stage;
      localStorage.setItem("os.sys.stage", JSON.stringify(stageStore));
      renderMain();
    }

    function togglePlay() {
      if (state.playing) { stopPlay(); return; }
      state.playing = true;
      syncControls();
      scheduleNext();
    }

    function scheduleNext() {
      if (!state.playing) return;
      state.timer = setTimeout(() => {
        const sys = current();
        if (sys && state.stage < sys.stages.length - 1) { goStage(state.stage + 1); scheduleNext(); }
        else stopPlay();
      }, Math.round(4200 / state.speed));
    }

    function cycleSpeed() {
      state.speed = state.speed === 1 ? 2 : state.speed === 2 ? 0.5 : 1;
      const b = $("#sys-speed");
      if (b) { b.dataset.speed = state.speed; b.textContent = state.speed + "×"; }
    }

    function advanceSocratic() {
      const sys = current();
      const st = sys && sys.stages && sys.stages[state.stage];
      if (!st || !st.socratic) return false;
      const steps = st.socratic.steps || [];
      if (!state.soc.hint) state.soc.hint = true;
      else if (!state.soc.point) state.soc.point = true;
      else if (state.soc.step < steps.length - 1) { state.soc.step += 1; state.soc.hint = false; state.soc.point = false; }
      else return false;
      renderMain();
      return true;
    }

    function selectSystem(id) {
      state.selected = id;
      const sys = current();
      if (!sys) return;
      state.stage = stageStore[id] != null && stageStore[id] < (sys.stages || []).length ? stageStore[id] : 0;
      state.soc = { step: 0, hint: false, point: false };
      state.playing = false;
      if (state.timer) clearTimeout(state.timer);
      state.timer = null;
      highlightSidebar();
      renderMain();
      renderRight();
    }

    renderSidebar();
    const initial = params.get("id");
    if (initial && list.some((s) => s.id === initial)) state.selected = initial;
    else if (list.length) state.selected = list[0].id;
    selectSystem(state.selected);
    const stageParam = Number(params.get("stage"));
    if (!Number.isNaN(stageParam)) goStage(stageParam);

    $("#sys-sidebar").addEventListener("click", (e) => {
      const b = e.target.closest(".ex-item");
      if (!b || !b.dataset.id) return;
      selectSystem(b.dataset.id);
    });
    $("#sys-right").addEventListener("click", (e) => {
      const b = e.target.closest("[data-qid]");
      if (!b) return;
      location.href = "explore.html?q=" + encodeURIComponent(b.dataset.qid);
    });
    $("#sys-main").addEventListener("click", (e) => {
      const socBtn = e.target.closest("[data-soc]");
      if (socBtn) {
        const act = socBtn.dataset.soc;
        if (act === "hint") state.soc.hint = true;
        else if (act === "point") state.soc.point = true;
        else if (act === "next") { state.soc.step += 1; state.soc.hint = false; state.soc.point = false; }
        renderMain();
        return;
      }
      if (e.target.closest("#sys-prev")) { goStage(state.stage - 1); return; }
      if (e.target.closest("#sys-next")) { goStage(state.stage + 1); return; }
      if (e.target.closest("#sys-play")) { togglePlay(); return; }
      if (e.target.closest("#sys-reset")) { stopPlay(); goStage(0); return; }
      if (e.target.closest("#sys-speed")) { cycleSpeed(); return; }
      const dot = e.target.closest(".ex-dot");
      if (dot) { stopPlay(); goStage(Number(dot.dataset.i)); }
    });
    document.addEventListener("keydown", (e) => {
      if (document.body.dataset.page !== "systems") return;
      if (e.target.closest("input, textarea, select")) return;
      if (e.code === "Space") { e.preventDefault(); if (advanceSocratic()) return; togglePlay(); }
      else if (e.key === "ArrowRight") goStage(state.stage + 1);
      else if (e.key === "ArrowLeft") goStage(state.stage - 1);
      else if (e.key === "Escape") { stopPlay(); goStage(0); }
    });
  }

  function renderInterviews() {
    const params = new URLSearchParams(location.search);
    const list = D.interviews;
    let stageStore = {};
    try { stageStore = JSON.parse(localStorage.getItem("os.iv.stage") || "{}"); } catch (e) {}
    const state = { query: "", selected: null, stage: 0, stages: [], playing: false, speed: 1, timer: null };

    $("#page").innerHTML =
      "<h1>面经</h1>" +
      '<div class="toolbar">' +
        '<input class="search" id="iv-search" type="search" placeholder="搜索公司 / 业务 / 岗位 / 日期" aria-label="搜索面经" autocomplete="off">' +
        '<span class="muted" id="iv-count"></span>' +
      "</div>" +
      '<div class="ex-shell">' +
        '<aside class="ex-pane ex-left">' +
          '<div class="ex-pane-head"><span>面经</span></div>' +
          '<div class="ex-pane-body" id="iv-sidebar"></div>' +
        '</aside>' +
        '<main class="ex-pane ex-main" id="iv-main" aria-live="polite"></main>' +
        '<aside class="ex-pane ex-right" id="iv-right">' +
        '</aside>' +
      "</div>";

    function current() { return list.find((iv) => iv.interview_id === state.selected); }

    function matchScore(a, b) {
      const norm = (s) => String(s || "").toLowerCase().replace(/[^\u4e00-\u9fa5a-z0-9]/g, "");
      const grams = (s) => { const set = new Set(); for (let i = 0; i < s.length - 1; i++) set.add(s.slice(i, i + 2)); return set; };
      const A = grams(norm(a)), B = grams(norm(b));
      if (!A.size || !B.size) return 0;
      let inter = 0;
      A.forEach((g) => { if (B.has(g)) inter++; });
      return inter / Math.max(A.size, B.size);
    }

    function renderSidebar() {
      const kw = state.query.trim().toLowerCase();
      const items = kw ? list.filter((iv) => ((iv.company || "") + " " + (iv.business || "") + " " + (iv.position || "") + " " + (iv.date || "") + " " + (iv.round || "")).toLowerCase().includes(kw)) : list;
      $("#iv-count").textContent = items.length + " 份面经";
      const el = $("#iv-sidebar");
      if (!items.length) { el.innerHTML = '<p class="muted">没有匹配的面经。</p>'; return; }
      el.innerHTML = items.map((iv) => {
        return '<button class="ex-item' + (iv.interview_id === state.selected ? " active" : "") + '" data-id="' + esc(iv.interview_id) + '">' +
          '<span class="ex-item-dot"></span>' +
          '<span class="ex-item-main"><span class="ex-item-title">' + esc(iv.company || "") + (iv.business ? ' · ' + esc(iv.business) : '') + '</span>' +
          '<span class="ex-item-meta">' + esc(iv.date || "") + (iv.position ? ' · ' + esc(iv.position) : '') + " · " + (iv.items || []).length + " 题</span></span>" +
        '</button>';
      }).join("");
      if (!items.some((iv) => iv.interview_id === state.selected)) state.selected = items[0].interview_id;
      highlightSidebar();
    }

    function highlightSidebar() {
      $$("#iv-sidebar .ex-item").forEach((b) => b.classList.toggle("active", b.dataset.id === state.selected));
    }

    function selectInterview(id) {
      state.selected = id;
      const iv = current();
      if (!iv) return;
      state.stages = (iv.items && iv.items.length ? iv.items : []).map((it) => ({ n: it.n, text: it.text, section: it.section || "", title: "第 " + it.n + " 题" }));
      if (!state.stages.length && iv.body_html) state.stages = [{ n: 0, text: iv.body_html, section: "", title: "原文" }];
      state.stage = stageStore[id] != null && stageStore[id] < state.stages.length ? stageStore[id] : 0;
      state.playing = false;
      if (state.timer) clearTimeout(state.timer);
      state.timer = null;
      highlightSidebar();
      renderMain();
      renderRight();
    }

    function syncControls() {
      const playBtn = $("#iv-play");
      if (playBtn) playBtn.innerHTML = state.playing ? ICONS.pause : ICONS.play;
    }

    function renderMain() {
      const iv = current();
      const el = $("#iv-main");
      if (!iv) { el.innerHTML = '<p class="muted">左侧选择一篇面经。</p>'; return; }
      const total = state.stages.length;
      if (!total) {
        el.innerHTML = '<div class="ex-stage-head"><h2>' + esc(iv.company || "") + '</h2></div>' +
          '<div class="ex-stage"><div class="ex-stage-body q-body">' + (iv.body_html || "") + "</div></div>";
        return;
      }
      state.stage = Math.min(Math.max(state.stage, 0), total - 1);
      const si = state.stage;
      const st = state.stages[si];
      const isHTML = st.n === 0 && st.text.indexOf("<") !== -1;
      el.innerHTML =
        '<div class="ex-stage-head">' +
          '<span class="ex-stage-kind">' + esc(iv.round || "面经") + "</span>" +
          "<h2>" + esc(iv.company || "") + (iv.business ? " · " + esc(iv.business) : "") + "</h2>" +
          '<div class="tags">' +
            (iv.position ? '<span class="tag">' + esc(iv.position) + "</span>" : "") +
            (iv.date ? '<span class="tag">' + esc(iv.date) + "</span>" : "") +
          "</div>" +
        "</div>" +
        '<div class="ex-stage">' +
          '<div class="ex-stage-title"><span class="ex-stage-idx">' + String(si + 1).padStart(2, "0") + "</span> " + esc(st.title) + (st.section ? " · " + esc(st.section) : "") + "</div>" +
          '<div class="ex-stage-body q-body iv-question">' + (isHTML ? st.text : esc(st.text)) + "</div>" +
        "</div>" +
        (iv.notes_html ? '<div class="iv-notes q-body">' + iv.notes_html + "</div>" : "") +
        '<div class="ex-controls">' +
          '<button class="icon-btn" id="iv-prev" aria-label="上一题">' + ICONS.chevronL + "</button>" +
          '<button class="icon-btn" id="iv-play" aria-label="播放或暂停">' + (state.playing ? ICONS.pause : ICONS.play) + "</button>" +
          '<button class="icon-btn" id="iv-next" aria-label="下一题">' + ICONS.chevronR + "</button>" +
          '<button class="icon-btn" id="iv-reset" aria-label="回到第一题">' + ICONS.reset + "</button>" +
          '<button class="chip" id="iv-speed" data-speed="' + state.speed + '">' + state.speed + "×</button>" +
          '<span class="ex-progress"><b>' + String(si + 1) + "</b> / " + total + "</span>" +
        "</div>" +
        '<div class="ex-dots">' + state.stages.map((x, i) => '<button class="ex-dot' + (i === si ? " active" : "") + (i < si ? " seen" : "") + '" data-i="' + i + '" aria-label="第 ' + (i + 1) + ' 题"></button>').join("") + "</div>";
    }

    function renderRight() {
      const iv = current();
      const el = $("#iv-right");
      if (!iv) { el.innerHTML = ""; return; }
      const linked = iv.linked || [];
      const cur = state.stages[state.stage];
      let best = null, bestScore = 0;
      linked.forEach((l) => {
        const sc = matchScore(cur ? cur.text : "", l.question);
        if (sc > bestScore) { bestScore = sc; best = l; }
      });
      let html = '<div class="ex-pane-head"><span>关联题卡</span></div><div class="ex-pane-body">';
      if (!linked.length) {
        html += '<p class="muted" style="padding:12px 14px">这篇面经还没有沉淀题卡。</p>';
      } else {
        html += '<div class="iv-links">' + linked.map((l) => {
          const isBest = best && l.id === best.id && bestScore >= 0.28;
          return '<button class="ex-item' + (isBest ? " active" : "") + '" data-qid="' + esc(l.id) + '">' +
            '<span class="ex-item-dot"></span>' +
            '<span class="ex-item-main"><span class="ex-item-title">' + esc(l.question) + "</span>" +
            '<span class="ex-item-meta">' + esc(l.id) + " · " + esc(domainLabel(l.domain)) + (l.diagrams ? " · 含图" : "") + "</span></span>" +
          "</button>";
        }).join("") + "</div>";
        if (best && bestScore >= 0.28) {
          const q = questionMap()[best.id];
          if (q) {
            html += '<div class="iv-linked-body"><a class="iv-linked-title" href="explore.html?q=' + encodeURIComponent(q.id) + '">' + esc(q.question) + " · 打开探索</a>" +
              '<div class="q-body">' + sectionCardsHTML(q) + "</div></div>";
          }
        }
      }
      html += "</div>";
      el.innerHTML = html;
      if (best && bestScore >= 0.28) {
        const q = questionMap()[best.id];
        if (q) mountSectionDiagrams(el, q);
      }
    }

    function stopPlay() {
      if (state.timer) clearTimeout(state.timer);
      state.timer = null;
      state.playing = false;
      syncControls();
    }

    function goStage(i) {
      const iv = current();
      if (!iv || !state.stages.length) return;
      state.stage = Math.min(Math.max(i, 0), state.stages.length - 1);
      stageStore[iv.interview_id] = state.stage;
      localStorage.setItem("os.iv.stage", JSON.stringify(stageStore));
      renderMain();
      renderRight();
    }

    function togglePlay() {
      if (state.playing) { stopPlay(); return; }
      state.playing = true;
      syncControls();
      scheduleNext();
    }

    function scheduleNext() {
      if (!state.playing) return;
      state.timer = setTimeout(() => {
        if (state.stage < state.stages.length - 1) { goStage(state.stage + 1); scheduleNext(); }
        else stopPlay();
      }, Math.round(3200 / state.speed));
    }

    function cycleSpeed() {
      state.speed = state.speed === 1 ? 2 : state.speed === 2 ? 0.5 : 1;
      const b = $("#iv-speed");
      if (b) { b.dataset.speed = state.speed; b.textContent = state.speed + "×"; }
    }

    $("#iv-search").addEventListener("input", debounce((e) => { state.query = e.target.value; renderSidebar(); }, 120));
    $("#iv-sidebar").addEventListener("click", (e) => {
      const b = e.target.closest(".ex-item");
      if (!b || !b.dataset.id) return;
      selectInterview(b.dataset.id);
    });
    $("#iv-right").addEventListener("click", (e) => {
      const b = e.target.closest("[data-qid]");
      if (!b) return;
      location.href = "explore.html?q=" + encodeURIComponent(b.dataset.qid);
    });
    $("#iv-main").addEventListener("click", (e) => {
      if (e.target.closest("#iv-prev")) { goStage(state.stage - 1); return; }
      if (e.target.closest("#iv-next")) { goStage(state.stage + 1); return; }
      if (e.target.closest("#iv-play")) { togglePlay(); return; }
      if (e.target.closest("#iv-reset")) { stopPlay(); goStage(0); return; }
      if (e.target.closest("#iv-speed")) { cycleSpeed(); return; }
      const dot = e.target.closest(".ex-dot");
      if (dot) { stopPlay(); goStage(Number(dot.dataset.i)); }
    });
    document.addEventListener("keydown", (e) => {
      if (document.body.dataset.page !== "interviews") return;
      if (e.target.closest("input, textarea, select")) return;
      if (e.code === "Space") { e.preventDefault(); togglePlay(); }
      else if (e.key === "ArrowRight") goStage(state.stage + 1);
      else if (e.key === "ArrowLeft") goStage(state.stage - 1);
      else if (e.key === "Escape") { stopPlay(); goStage(0); }
    });

    const initial = params.get("iv");
    if (initial && list.some((x) => x.interview_id === initial)) state.selected = initial;
    else if (list.length) state.selected = list[0].interview_id;
    renderSidebar();
    selectInterview(state.selected);
    const stageParam = Number(params.get("stage"));
    if (!Number.isNaN(stageParam)) goStage(stageParam);
  }

  function shuffle(a) { const arr = a.slice(); for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

  function renderPractice() {
    $("#page").innerHTML =
      "<h1>随机训练</h1>" +
      '<div id="p-config" class="panel">' +
        "<h2>训练设置</h2>" +
        '<label class="field"><span>题目数量</span><select id="p-count"><option value="10">10 题</option><option value="20" selected>20 题</option><option value="0">全部</option></select></label>' +
        '<div class="field"><span>范围</span><div class="chips" id="p-domains"></div></div>' +
        '<button class="btn btn-primary" id="p-start">开始训练</button>' +
      "</div>" +
      '<div id="p-session" class="panel" hidden></div>';

    const keys = Object.keys(D.stats.domains || {});
    const sel = new Set(keys);
    function renderDomains() { $("#p-domains").innerHTML = keys.map((k) => '<button class="chip active" data-d="' + esc(k) + '">' + esc(domainLabel(k)) + "</button>").join(""); }
    renderDomains();
    $("#p-domains").addEventListener("click", (e) => {
      const b = e.target.closest("[data-d]"); if (!b) return;
      const k = b.dataset.d;
      if (sel.has(k)) { sel.delete(k); b.classList.remove("active"); } else { sel.add(k); b.classList.add("active"); }
    });
    $("#p-start").addEventListener("click", () => {
      const count = Number($("#p-count").value);
      let pool = D.questions.filter((q) => sel.has(q.domain));
      pool = shuffle(pool);
      if (count > 0) pool = pool.slice(0, count);
      if (!pool.length) { alert("当前范围没有题目"); return; }
      start(pool);
    });

    function start(pool) {
      $("#p-config").hidden = true;
      const session = $("#p-session");
      session.hidden = false;
      let idx = 0;
      const results = [];
      function record(q, g) {
        results.push({ q: q, g: g });
        const log = JSON.parse(localStorage.getItem("os.practice.log") || "[]");
        log.push({ id: q.id, domain: q.domain, type: q.type, grade: g, ts: Date.now() });
        localStorage.setItem("os.practice.log", JSON.stringify(log));
        idx++;
        idx < pool.length ? render() : summary();
      }
      function render() {
        const q = pool[idx];
        session.innerHTML =
          '<div class="practice-head"><span class="muted">第 ' + (idx + 1) + " / " + pool.length + ' 题</span><div class="progress-bar"><div class="progress-fill" style="width:' + (idx / pool.length * 100) + '%"></div></div></div>' +
          "<h2>" + esc(q.question) + "</h2>" +
          '<div class="tags">' + tagsHTML(q) + "</div>" +
          '<div class="practice-actions"><button class="btn btn-secondary" id="p-show">显示答案</button></div>' +
          '<div id="p-answer" class="q-body" hidden>' + sectionCardsHTML(q) + "</div>" +
          '<div class="grade-row" style="margin-top:14px"><button class="grade-btn ok" data-g="2">会</button><button class="grade-btn fuzzy" data-g="1">模糊</button><button class="grade-btn bad" data-g="0">不会</button></div>';
        $("#p-show").addEventListener("click", () => { $("#p-answer").hidden = false; });
        mountSectionDiagrams($("#p-answer"), q);
        $(".grade-row", session).addEventListener("click", (e) => { const b = e.target.closest("[data-g]"); if (!b) return; record(q, Number(b.dataset.g)); });
      }
      function summary() {
        const total = results.length;
        const ok = results.filter((r) => r.g === 2).length;
        const fuzzy = results.filter((r) => r.g === 1).length;
        const bad = results.filter((r) => r.g === 0).length;
        const weak = results.filter((r) => r.g < 2).map((r) => r.q.id);
        session.innerHTML =
          "<h2>本轮完成</h2>" +
          '<div class="stats"><div class="stat"><b>' + ok + "</b><span>会</span></div><div class=\"stat\"><b>" + fuzzy + "</b><span>模糊</span></div><div class=\"stat\"><b>" + bad + "</b><span>不会</span></div></div>" +
          (weak.length ? "<h3>建议复习</h3><div class=\"q-list\">" + weak.map((id) => { const q = questionMap()[id]; return q ? '<a class="q-row" style="grid-template-columns:1fr" href="questions.html#' + encodeURIComponent(q.id) + '">' + esc(q.question) + "</a>" : ""; }).join("") + "</div>" : "") +
          '<div class="hero-actions" style="margin-top:16px"><button class="btn btn-primary" id="p-again">再来一组</button><a class="btn btn-secondary" href="profile.html">查看画像</a></div>';
        $("#p-again").addEventListener("click", () => location.reload());
      }
      render();
    }
  }

  function renderProfile() {
    $("#page").innerHTML = "<h1>能力画像</h1><div id=\"p-profile\"></div>";
    const el = $("#p-profile");
    const log = JSON.parse(localStorage.getItem("os.practice.log") || "[]");
    if (!log.length) { el.innerHTML = '<div class="panel"><p class="muted">还没有训练记录，先去<a href="practice.html">随机训练</a>几次。</p></div>'; return; }
    const byDomain = {};
    log.forEach((r) => {
      const k = r.domain || "other";
      byDomain[k] = byDomain[k] || { total: 0, ok: 0 };
      byDomain[k].total++;
      if (r.grade === 2) byDomain[k].ok++;
    });
    const rows = Object.keys(byDomain).map((k) => {
      const v = byDomain[k];
      const pct = Math.round(v.ok / v.total * 100);
      return '<div class="bar"><span class="bar-label">' + esc(domainLabel(k)) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div><span class="muted">' + pct + "%</span></div>";
    }).join("");
    const weak = log.filter((r) => r.grade < 2).slice(-10).map((r) => { const q = questionMap()[r.id]; return q ? '<a class="q-row" style="grid-template-columns:1fr" href="questions.html#' + encodeURIComponent(q.id) + '">' + esc(q.question) + "</a>" : ""; }).join("");
    const recent = log.slice(-10).reverse().map((r) => { const q = questionMap()[r.id]; return '<div class="rec-row"><span>' + (q ? esc(q.question) : esc(r.id)) + '</span><span class="muted">' + (r.grade === 2 ? "会" : r.grade === 1 ? "模糊" : "不会") + "</span></div>"; }).join("");
    el.innerHTML =
      '<div class="panel"><h2>领域掌握度</h2>' + rows + '<p class="muted" style="margin-top:12px">基于 ' + log.length + ' 次作答估算</p></div>' +
      (weak ? '<div class="panel" style="margin-top:16px"><h2>最近薄弱</h2><div class="q-list">' + weak + "</div></div>" : "") +
      '<div class="panel" style="margin-top:16px"><h2>最近记录</h2>' + recent + "</div>" +
      '<div style="margin-top:16px"><button class="btn btn-secondary" id="p-reset">清空训练记录</button></div>';
    $("#p-reset").addEventListener("click", () => { if (confirm("确定清空本地训练记录？")) { localStorage.removeItem("os.practice.log"); location.reload(); } });
  }

  function boot() {
    initTheme();
    renderNav();
    const page = document.body.dataset.page;
    const map = { index: renderIndex, questions: renderQuestions, systems: renderSystems, explore: renderExplore, interviews: renderInterviews, practice: renderPractice, profile: renderProfile };
    (map[page] || renderIndex)();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
