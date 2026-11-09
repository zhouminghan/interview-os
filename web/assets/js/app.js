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
  const safeDecode = (s) => { try { return decodeURIComponent(String(s || "")); } catch (e) { return String(s || ""); } };

  function readText(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function writeText(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
  function removeText(key) { try { localStorage.removeItem(key); } catch (e) {} }
  function readJSON(key, fallback) {
    const raw = readText(key);
    if (raw == null) return fallback;
    try { const parsed = JSON.parse(raw); return parsed == null ? fallback : parsed; } catch (e) { return fallback; }
  }
  function writeJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {} }

  const MASTERY_KEY = "os.mastery.v2";
  const MASTERY_BACKUP_KEY = "os.mastery.v1.backup";
  const PRACTICE_LOG_KEY = "os.practice.log";
  const PRACTICE_QUEUE_KEY = "os.practice.queue";
  const DIMENSION_SETS = {
    technical: ["knowledge", "expression", "project", "follow_up"],
    project: ["content", "expression", "structure", "risk"],
    negotiation: ["information", "expression", "leverage", "negotiation"],
  };
  const DIMENSION_LABELS = {
    knowledge: "知识", expression: "表达", project: "项目结合", follow_up: "追问",
    content: "内容", structure: "结构", risk: "风险", information: "信息",
    leverage: "筹码", negotiation: "谈判",
  };

  function emptyMasteryStore() {
    return { schemaVersion: 2, questions: {}, history: [], weakQueue: [], reviewQueue: [] };
  }
  function masteryStore() {
    const s = readJSON(MASTERY_KEY, null);
    return s && typeof s === "object" && !Array.isArray(s) && s.schemaVersion === 2 ? s : emptyMasteryStore();
  }
  function saveMasteryStore(s) { writeJSON(MASTERY_KEY, s); }
  function dimensionsFor(q, total) {
    const key = q && q.type === "technical" ? "technical" : (q && q.type === "negotiation" ? "negotiation" : "project");
    const dims = {};
    (DIMENSION_SETS[key] || []).forEach((d) => { dims[d] = total; });
    return dims;
  }
  function migrateMastery() {
    const existing = readJSON(MASTERY_KEY, null);
    if (existing && existing.schemaVersion === 2) return existing;
    const oldLog = readJSON(PRACTICE_LOG_KEY, []);
    const oldExplore = readJSON("os.explore", {});
    writeJSON(MASTERY_BACKUP_KEY, { os_practice_log: oldLog, os_explore: oldExplore });
    const store = emptyMasteryStore();
    const byId = questionMap();
    if (Array.isArray(oldLog)) {
      oldLog.forEach((r) => {
        if (!r || !r.id) return;
        const q = byId[r.id] || { id: r.id, type: r.type || "technical" };
        const total = Number(r.grade) === 2 ? 3 : Number(r.grade) === 1 ? 2 : 0;
        const entry = {
          id: r.id, domain: r.domain || q.domain || "", type: q.type || r.type || "technical",
          grade: total, ts: Number(r.ts) || Date.now(), revealed: !!r.revealed,
          selfAnswer: String(r.selfAnswer || ""), dimensions: dimensionsFor(q, total),
        };
        store.history.push(entry);
        store.questions[r.id] = {
          total, dimensions: entry.dimensions, lastGrade: total,
          lastReviewedAt: entry.ts, revealed: entry.revealed, selfAnswer: entry.selfAnswer,
        };
      });
    }
    if (oldExplore && typeof oldExplore === "object") {
      Object.keys(oldExplore.mastery || {}).forEach((id) => {
        const q = byId[id] || { id, type: "technical" };
        const total = Math.min(5, Math.max(0, Number(oldExplore.mastery[id]) || 0));
        store.questions[id] = Object.assign({}, store.questions[id], {
          total, dimensions: dimensionsFor(q, total), lastGrade: total,
          lastReviewedAt: Date.now(), revealed: false, selfAnswer: "",
        });
      });
      Object.keys(oldExplore.done || {}).forEach((id) => {
        if (!oldExplore.done[id] || store.questions[id]) return;
        const q = byId[id] || { id, type: "technical" };
        store.questions[id] = {
          total: 3, dimensions: dimensionsFor(q, 3), lastGrade: 3,
          lastReviewedAt: Date.now(), revealed: false, selfAnswer: "",
        };
      });
    }
    const latest = {};
    store.history.forEach((r) => { latest[r.id] = r; });
    store.weakQueue = Object.keys(latest).filter((id) => Number(latest[id].grade) < 3);
    store.reviewQueue = store.weakQueue.map((id) => ({
      id, dueAt: (latest[id].ts || Date.now()) + 86400000, reason: "grade<3",
    })).sort((a, b) => a.dueAt - b.dueAt);
    saveMasteryStore(store);
    return store;
  }
  function recordMastery(q, total, dims, revealed, selfAnswer) {
    const store = masteryStore();
    const dimensions = Object.assign(dimensionsFor(q, total), dims || {});
    const ts = Date.now();
    store.questions[q.id] = {
      total, dimensions, lastGrade: total, lastReviewedAt: ts,
      revealed: !!revealed, selfAnswer: String(selfAnswer || ""),
    };
    store.history.push({
      id: q.id, domain: q.domain, type: q.type, grade: total, ts,
      revealed: !!revealed, selfAnswer: String(selfAnswer || ""), dimensions,
    });
    store.weakQueue = store.weakQueue.filter((id) => id !== q.id);
    if (total < 3) store.weakQueue.push(q.id);
    store.reviewQueue = store.reviewQueue.filter((x) => x.id !== q.id);
    store.reviewQueue.push({
      id: q.id, dueAt: ts + (total < 3 ? 86400000 : 3 * 86400000),
      reason: total < 3 ? "grade<3" : (revealed ? "revealed" : "scheduled"),
    });
    store.reviewQueue.sort((a, b) => a.dueAt - b.dueAt);
    saveMasteryStore(store);
    return store;
  }
  function showFeedback(message, undoFn) {
    const el = $("#os-feedback");
    if (!el) return;
    clearTimeout(showFeedback.timer);
    el.innerHTML = '<span>' + esc(message) + '</span>' +
      (undoFn ? '<button class="btn btn-sm btn-secondary" id="os-feedback-undo" type="button">撤销</button>' : "");
    el.hidden = false;
    if (undoFn) {
      $("#os-feedback-undo").addEventListener("click", () => {
        undoFn();
        el.hidden = true;
        showFeedback("已撤销");
      });
    }
    showFeedback.timer = setTimeout(() => { el.hidden = true; }, 4000);
  }

  function controlAttrs(label, pressed, extra) {
    return (extra || "") + ' aria-label="' + esc(label) + '" title="' + esc(label) + '"' +
      (pressed == null ? "" : ' aria-pressed="' + (pressed ? "true" : "false") + '"');
  }
  function iconButton(id, label, icon, pressed) {
    return '<button class="icon-btn" id="' + esc(id) + '" type="button"' + controlAttrs(label, pressed) + ">" + icon + "</button>";
  }
  function chipButton(label, active, extra) {
    return '<button class="chip' + (active ? " active" : "") + '" type="button"' + controlAttrs(label, active, extra) + ">" + esc(label) + "</button>";
  }
  function linkAttrs(label, current) {
    return ' aria-label="' + esc(label) + '" title="' + esc(label) + '"' + (current ? ' aria-current="page"' : "");
  }
  function replaceLocation(url, hash) {
    try { history.replaceState(null, "", url.pathname + url.search + url.hash); return; } catch (e) {}
    try { history.replaceState(null, "", url.href); return; } catch (e) {}
    if (hash) { try { location.hash = hash; } catch (e) {} }
  }

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
    const saved = readText("os-theme");
    const theme = saved || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.dataset.theme = theme;
  }

  function renderNav() {
    const page = document.body.dataset.page;
    const links = [
      ["index", "总览", "index.html"],
      ["questions", "问题库", "questions.html"],
      ["systems", "系统图解", "systems.html"],
      ["explore", "交互学习", "explore.html"],
      ["interviews", "面经", "interviews.html"],
      ["practice", "训练", "practice.html"],
      ["profile", "画像", "profile.html"]
    ];
    $("#topbar").innerHTML =
      '<div class="topbar-inner">' +
        '<a class="brand" href="index.html"' + linkAttrs("Interview OS") + '><span class="brand-dot"></span>Interview OS</a>' +
        '<div class="global-search" id="gs">' +
          '<input class="search gs-input" id="gs-input" type="search" placeholder="搜索分类 / 面经 / 八股 / 问题" aria-label="全局搜索" autocomplete="off">' +
          '<div class="gs-dropdown" id="gs-dropdown" hidden></div>' +
        '</div>' +
        '<nav class="nav-links" aria-label="主导航">' +
          links.map(([key, label, href]) =>
            '<a class="nav-link' + (key === page ? " active" : "") + '" href="' + href + '" data-nav="' + key + '"' +
              linkAttrs(label, key === page) + ">" + esc(label) + "</a>"
          ).join("") +
        "</nav>" +
        iconButton("theme-toggle", "切换主题", "", document.documentElement.dataset.theme === "dark") +
        '<div id="os-feedback" class="os-feedback" role="status" aria-live="polite" hidden></div>' +
      "</div>";
    const toggle = $("#theme-toggle");
    const syncIcon = () => {
      const dark = document.documentElement.dataset.theme === "dark";
      toggle.innerHTML = dark ? ICONS.sun : ICONS.moon;
      toggle.setAttribute("aria-pressed", dark ? "true" : "false");
    };
    syncIcon();
    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      writeText("os-theme", next);
      syncIcon();
      showFeedback(next === "dark" ? "已切换到深色主题" : "已切换到浅色主题");
    });
    initGlobalSearch();
  }

  function initGlobalSearch() {
    const input = $("#gs-input");
    const dd = $("#gs-dropdown");
    if (!input || !dd) return;
    const domainKeys = Object.keys(D.stats.domains || {});
    let activeIndex = -1;

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
      if (!g || !g.total) {
        dd.innerHTML = '<div class="gs-empty">没有匹配结果，试试领域名、公司名或题卡 ID。</div>';
        dd.hidden = false;
        activeIndex = -1;
        return;
      }
      let html = "";
      if (g.domains.length) {
        html += '<div class="gs-group">分类</div>' + g.domains.map((k) =>
          '<a class="gs-item" href="questions.html?domain=' + encodeURIComponent(k) + '"' + linkAttrs(domainLabel(k) + " 领域") + '><span class="gs-title">' + esc(domainLabel(k)) + '</span><span class="gs-meta">' + (D.stats.domains[k] || 0) + " 题</span></a>").join("");
      }
      if (g.interviews.length) {
        html += '<div class="gs-group">面经</div>' + g.interviews.map((iv) =>
          '<a class="gs-item" href="interviews.html?iv=' + encodeURIComponent(iv.interview_id) + '"' + linkAttrs((iv.company || "") + " · " + (iv.business || "") + " · " + (iv.date || "")) + '><span class="gs-title">' + esc(iv.company || "") + " · " + esc(iv.business || "") + '</span><span class="gs-meta">' + esc(iv.date || "") + "</span></a>").join("");
      }
      if (g.questions.length) {
        html += '<div class="gs-group">问题 / 八股</div>' + g.questions.map((x) =>
          '<a class="gs-item" href="questions.html#' + encodeURIComponent(x.id) + '"' + linkAttrs(x.question + " · " + x.id) + '><span class="gs-title">' + esc(x.question) + '</span><span class="gs-meta">' + (x.source_type === "knowledge" ? "八股 · " : "") + esc(domainLabel(x.domain)) + "</span></a>").join("");
      }
      dd.innerHTML = html;
      dd.hidden = false;
      activeIndex = -1;
      setActive(-1);
    }

    function items() { return $$(".gs-item", dd); }
    function setActive(i) {
      const list = items();
      activeIndex = Math.max(-1, Math.min(i, list.length - 1));
      list.forEach((a, idx) => a.classList.toggle("gs-active", idx === activeIndex));
    }

    input.addEventListener("input", debounce(render, 120));
    input.addEventListener("focus", render);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { dd.hidden = true; input.blur(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); if (!dd.hidden) setActive(activeIndex + 1); return; }
      if (e.key === "ArrowUp") { e.preventDefault(); if (!dd.hidden) setActive(activeIndex - 1); return; }
      if (e.key === "Enter") {
        const a = items()[activeIndex];
        if (a) { e.preventDefault(); location.href = a.getAttribute("href"); }
      }
    });
    document.addEventListener("click", (e) => { if (!e.target.closest("#gs")) dd.hidden = true; });
  }

  const typeLabel = (t) => (t === "technical" ? "技术" : "项目");
  const diffStars = (n) => ["", "★", "★★", "★★★", "★★★★", "★★★★★"][Math.min(5, Math.max(0, Number(n) || 0))];
  const domainLabel = (d) => (D.domains[d] && D.domains[d].label) || d;
  const questionMap = () => { const m = {}; D.questions.forEach((q) => { m[q.id] = q; }); return m; };

  function topicOverlap(a, b) {
    const norm = (s) => String(s == null ? "" : s).toLowerCase().replace(/[\s_\-]+/g, "");
    const A = new Set((Array.isArray(a) ? a : []).map(norm).filter(Boolean));
    const B = new Set((Array.isArray(b) ? b : []).map(norm).filter(Boolean));
    if (!A.size || !B.size) return 0;
    let hits = 0;
    A.forEach((t) => { if (B.has(t)) hits++; });
    return hits / Math.min(A.size, B.size);
  }

  function tagsHTML(q) {
    return '<span class="tag ' + (q.type === "technical" ? "tech" : "proj") + '">' + esc(typeLabel(q.type)) + "</span>" +
      '<span class="tag">' + esc(domainLabel(q.domain)) + "</span>" +
      (q.difficulty ? '<span class="tag">难度 ' + diffStars(q.difficulty) + "</span>" : "") +
      (q.frequency ? '<span class="tag ' + (q.frequency === "high" ? "high" : "mid") + '">' + (q.frequency === "high" ? "高频" : "中频") + "</span>" : "") +
      (q.source_type === "knowledge" ? '<span class="tag kw">八股</span>' : "") +
      (q.needs_personal_input ? '<span class="tag warn">待补个人</span>' : "") +
      (q.content_status === "needs_review" ? '<span class="tag warn">待复核</span>' : "") +
      (q.content_status === "needs_answer" ? '<span class="tag warn">待补答案</span>' : "") +
      (q.training_eligible === false ? '<span class="tag">不进训练</span>' : "");
  }

  function interviewCard(iv) {
    const label = (iv.company || "") + " · " + (iv.business || "") + " · " + (iv.date || "");
    return '<a class="interview-card interview-link" href="interviews.html?iv=' + encodeURIComponent(iv.interview_id) + '"' + linkAttrs(label) + '>' +
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

  function diagramStageMeta(title, stageKey) {
    const byKey = {
      thinking: { kind: "framework", short: "思路" },
      pitch: { kind: "pitch", short: "一句话" },
      short: { kind: "short", short: "30 秒" },
      long: { kind: "medium", short: "1 分钟" },
      medium: { kind: "medium", short: "1 分钟" },
      deep: { kind: "deep", short: "参考" },
      followup: { kind: "followup", short: "追问" },
      project: { kind: "project", short: "项目" },
      risk: { kind: "risk", short: "风险" },
      framework: { kind: "framework", short: "框架" },
      coach: { kind: "coach", short: "教练" },
      notes: { kind: "notes", short: "补充" },
      points: { kind: "points", short: "要点" },
      origin: { kind: "origin", short: "原题" }
    };
    if (stageKey && byKey[stageKey]) return byKey[stageKey];
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

  function answerOutlineStage(q) {
    const secs = q && Array.isArray(q.sections) ? q.sections : [];
    if (secs.some((s) => s && s.stage_key === "thinking")) return null;
    const raw = (q && Array.isArray(q.answer_outline) ? q.answer_outline :
      (q && typeof q.answer_outline === "string" ? [q.answer_outline] : [])) || [];
    const items = raw.map((x) => typeof x === "string" ? x.trim() : "").filter(Boolean);
    if (!items.length) return null;
    return {
      title: "回答思路",
      stage_label: "回答思路",
      stage_key: "thinking",
      html: "<ol>" + items.map((x) => "<li>" + esc(x) + "</li>").join("") + "</ol>",
      diagram: null
    };
  }

  function displayQuestionStages(q, includeCoach) {
    const secs = q && Array.isArray(q.sections) ? q.sections.filter(Boolean) : [];
    let stages = secs.map((s) => ({
      title: s.stage_label || s.title || "概述",
      stage_label: s.stage_label,
      stage_key: s.stage_key || "",
      html: s.html || "",
      diagram: s.diagram || null
    }));
    if (!includeCoach) stages = stages.filter((s) => s.stage_key !== "coach");
    if (!stages.length) {
      stages = [{
        title: "回答",
        html: (q && q.body_html) || "",
        diagram: q && Array.isArray(q.diagrams) && q.diagrams.length ? q.diagrams[0] : null
      }];
    }
    const outline = answerOutlineStage(q);
    return outline ? [outline].concat(stages) : stages;
  }

  function sectionCardsHTML(q, includeCoach) {
    return displayQuestionStages(q, includeCoach).map((s, i) => {
      const hasDiag = !!s.diagram;
      const title = s.stage_label || s.title || "概述";
      return '<section class="qa-section">' +
        '<h3 class="qa-section-title"><span class="qa-num">' + String(i + 1).padStart(2, "0") + "</span>" + esc(title) +
        (hasDiag ? '<span class="qa-badge">图</span>' : "") + "</h3>" +
        '<div class="qa-section-body">' + (s.html || "") + "</div>" +
        (hasDiag ? '<div class="qa-diagram dg-scroll"><div class="dg" data-diagram="' + i + '"></div></div>' : "") +
      "</section>";
    }).join("");
  }

  function mountSectionDiagrams(root, q, includeCoach) {
    const stages = displayQuestionStages(q, includeCoach);
    $$(".dg", root).forEach((el) => {
      const idx = Number(el.dataset.diagram);
      const d = stages[idx] && stages[idx].diagram;
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
    const m = masteryStore();
    const done = {}, mastery = {};
    Object.keys(m.questions || {}).forEach((id) => {
      const q = m.questions[id];
      mastery[id] = Number(q.total) || 0;
      if (mastery[id] >= 3) done[id] = true;
    });
    return { done, mastery, last: readJSON("os.explore.last", {}) };
  }
  function saveExploreStore(s) {
    const m = masteryStore();
    const byId = questionMap();
    const ids = new Set(Object.keys(s.mastery || {}).concat(Object.keys(s.done || {})));
    ids.forEach((id) => {
      const q = byId[id] || { id, type: "technical" };
      let total = Number(s.mastery[id]);
      if (!Number.isFinite(total)) total = s.done[id] ? 3 : 2;
      total = Math.min(5, Math.max(0, total));
      m.questions[id] = Object.assign({}, m.questions[id], {
        total, dimensions: dimensionsFor(q, total), lastGrade: total,
        lastReviewedAt: Date.now(), revealed: false, selfAnswer: "",
      });
    });
    writeJSON("os.explore.last", s.last || {});
    saveMasteryStore(m);
  }

  function stagesFor(q, includeCoach) {
    return displayQuestionStages(q, includeCoach).map((s) => {
      const title = s.stage_label || s.title || "概述";
      const meta = diagramStageMeta(title, s.stage_key);
      return { title: title, short: meta.short, kind: meta.kind, html: s.html || "", diagram: s.diagram || null };
    });
  }

  function renderIndex() {
    const page = document.body.dataset.page;
    const s = D.stats || {};
    const domainKeys = Object.keys(s.domains || {});
    const domains = domainKeys.map((k) => ({ k: k, n: s.domains[k] || 0 })).sort((a, b) => b.n - a.n);
    const maxN = domains.length ? domains[0].n : 1;
    const recent = D.interviews.slice(0, 3);
    $("#page").innerHTML =
      "<h1>Interview OS</h1>" +
      '<p class="lead">个人面试知识库 · 训练 · 表达 · 谈判</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="systems.html"' + linkAttrs("系统图解", page === "systems") + '>系统图解</a><a class="btn btn-secondary" href="questions.html"' + linkAttrs("浏览问题库", page === "questions") + '>浏览问题库</a><a class="btn btn-secondary" href="practice.html"' + linkAttrs("随机训练", page === "practice") + '>随机训练</a></div>' +
      '<div class="stats">' +
        '<div class="stat"><b>' + (s.questions || 0) + "</b><span>标准化问题</span></div>" +
        '<div class="stat"><b>' + (s.interviews || 0) + "</b><span>原始面经</span></div>" +
        '<div class="stat"><b>' + domainKeys.length + "</b><span>领域</span></div>" +
      "</div>" +
      "<h2>领域榜单</h2>" +
      '<div class="rank-list">' +
        domains.map((d, i) =>
          '<a class="rank-row' + (i < 3 ? " top" : "") + '" href="questions.html?domain=' + encodeURIComponent(d.k) + '"' + linkAttrs(domainLabel(d.k) + " 领域") + '>' +
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
    const PAGE_SIZE = 80;
    const domainKeys = Object.keys(D.stats.domains || {});
    const validTypes = ["all", "technical", "project"];
    const byId = questionMap();
    const requestedType = params.get("type");
    const requestedDomain = params.get("domain");
    const state = {
      query: "",
      type: validTypes.includes(requestedType) ? requestedType : "all",
      domain: domainKeys.includes(requestedDomain) ? requestedDomain : "all",
      selected: null,
      limit: PAGE_SIZE,
      review: false
    };
    const deepQ = byId[safeDecode(location.hash.slice(1))];
    let expandForDeepLink = !!deepQ;
    if (deepQ) {
      state.selected = deepQ.id;
      if (state.domain !== "all" && state.domain !== deepQ.domain) state.domain = domainKeys.includes(deepQ.domain) ? deepQ.domain : "all";
      if (state.type !== "all" && state.type !== deepQ.type) state.type = validTypes.includes(deepQ.type) ? deepQ.type : "all";
    }
    $("#page").innerHTML =
      "<h1>问题库</h1>" +
      '<div class="toolbar">' +
        '<input class="search" id="q-search" type="search" placeholder="搜索问题、主题或 ID" aria-label="搜索问题">' +
        '<span class="muted" id="q-count" aria-live="polite"></span>' +
        '<div class="chips" id="q-type"></div>' +
        '<div class="chips" id="q-domain"></div>' +
        '<button class="chip" id="q-review" type="button"' + controlAttrs("复盘模式", false) + '>复盘模式</button>' +
      "</div>" +
      '<div class="split"><div class="q-list" id="q-list"></div><aside class="q-detail" id="q-detail" aria-live="polite"></aside></div>';

    function renderChips() {
      $("#q-type").innerHTML = [["all", "全部"], ["technical", "技术"], ["project", "项目"]].map(([v, l]) =>
        chipButton(l, state.type === v, ' data-type="' + v + '"')).join("");
      $("#q-domain").innerHTML = [["all", "全部领域"]].concat(domainKeys.map((k) => [k, domainLabel(k)])).map(([v, l]) =>
        chipButton(l, state.domain === v, ' data-domain="' + esc(v) + '"')).join("");
    }

    function filtered() {
      return D.questions.filter((q) => {
        if (state.type !== "all" && q.type !== state.type) return false;
        if (state.domain !== "all" && q.domain !== state.domain) return false;
        if (state.query) {
          const hay = [q.question, q.id, (q.topic || []).join(" ")].join(" ").toLowerCase();
          if (!hay.includes(state.query.toLowerCase())) return false;
        }
        return true;
      });
    }

    function syncURL() {
      const url = new URL(location.href);
      if (state.domain === "all") url.searchParams.delete("domain"); else url.searchParams.set("domain", state.domain);
      if (state.type === "all") url.searchParams.delete("type"); else url.searchParams.set("type", state.type);
      const hash = state.selected ? "#" + encodeURIComponent(state.selected) : "";
      url.hash = hash;
      replaceLocation(url, hash);
    }

    function highlight() {
      $$("#q-list .q-row").forEach((b) => {
        const active = b.dataset.id === state.selected;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function renderDetail(id) {
      const q = byId[id];
      if (!q) { $("#q-detail").innerHTML = '<p class="muted">没有匹配的问题。</p>'; return; }
      const srcs = (q.sources || []).map((s) => esc(s.company || "") + " · " + esc(s.position || "") + " · " + esc(s.date || "")).join(" / ");
      $("#q-detail").innerHTML =
        "<h2>" + esc(q.question) + "</h2>" +
        '<div class="tags">' + tagsHTML(q) + "</div>" +
        '<div class="q-body">' + sectionCardsHTML(q, state.review) + "</div>" +
        '<a class="btn btn-secondary btn-sm" href="explore.html?q=' + encodeURIComponent(q.id) + '"' + linkAttrs("交互式学习") + '>交互式学习</a>' +
        (srcs ? '<div class="q-sources">来源：' + srcs + "</div>" : "");
      mountSectionDiagrams($("#q-detail"), q, state.review);
    }

    function renderList() {
      const list = filtered();
      const el = $("#q-list");
      const count = $("#q-count");
      if (!list.length) {
        count.textContent = "共 0 题，已显示 0 题";
        el.innerHTML = '<p class="muted">没有匹配的问题。</p>';
        state.selected = null;
        $("#q-detail").innerHTML = '<p class="muted">调整搜索或筛选条件。</p>';
        syncURL();
        return;
      }
      if (!state.selected || !list.some((q) => q.id === state.selected)) state.selected = list[0].id;
      const selectedIndex = list.findIndex((q) => q.id === state.selected);
      if (expandForDeepLink && selectedIndex >= state.limit) state.limit = Math.ceil((selectedIndex + 1) / PAGE_SIZE) * PAGE_SIZE;
      const visible = list.slice(0, state.limit);
      count.textContent = "共 " + list.length + " 题，已显示 " + visible.length + " 题";
      el.innerHTML = visible.map((q, i) =>
        '<button class="q-row" type="button" data-id="' + esc(q.id) + '"' + controlAttrs(q.question + " · " + q.id, q.id === state.selected) + ">" +
          '<span class="rank" aria-hidden="true">' + (i + 1) + "</span>" +
          '<span class="q-title">' + esc(q.question) + "</span>" +
          '<span class="q-meta"><span class="q-id">' + esc(q.id) + "</span> · " + esc(domainLabel(q.domain)) + " · " + diffStars(q.difficulty) + "</span>" +
        "</button>").join("") +
        (visible.length < list.length ? '<button class="btn btn-secondary" id="q-more" type="button"' + controlAttrs("显示更多") + ">显示更多</button>" : "");
      highlight();
      renderDetail(state.selected);
      syncURL();
      expandForDeepLink = false;
    }

    renderChips();
    renderList();

    $("#q-search").addEventListener("input", debounce((e) => { state.query = e.target.value; state.limit = PAGE_SIZE; renderList(); }, 120));
    $("#q-type").addEventListener("click", (e) => {
      const b = e.target.closest("[data-type]");
      if (!b) return;
      state.type = b.dataset.type;
      state.limit = PAGE_SIZE;
      renderChips();
      renderList();
    });
    $("#q-domain").addEventListener("click", (e) => {
      const b = e.target.closest("[data-domain]");
      if (!b) return;
      state.domain = b.dataset.domain;
      state.limit = PAGE_SIZE;
      renderChips();
      renderList();
    });
    $("#q-list").addEventListener("click", (e) => {
      if (e.target.closest("#q-more")) {
        state.limit += PAGE_SIZE;
        renderList();
        showFeedback("已加载更多题卡");
        return;
      }
      const b = e.target.closest(".q-row");
      if (!b) return;
      state.selected = b.dataset.id;
      highlight();
      renderDetail(state.selected);
      syncURL();
    });
    $("#q-review").addEventListener("click", (e) => {
      state.review = !state.review;
      e.currentTarget.classList.toggle("active", state.review);
      e.currentTarget.setAttribute("aria-pressed", state.review ? "true" : "false");
      showFeedback(state.review ? "复盘模式已开启，显示教练备注" : "复盘模式已关闭");
      renderDetail(state.selected);
    });
  }

  function renderExplore() {
    const params = new URLSearchParams(location.search);
    const domainKeys = Object.keys(D.stats.domains || {});
    const requestedDomain = params.get("domain");
    const store = exploreStore();
    store.done = store.done || {};
    store.mastery = store.mastery || {};
    store.last = store.last || {};
    const state = {
      query: "",
      domain: domainKeys.includes(requestedDomain) ? requestedDomain : "all",
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

    const kindLabel = { pitch: "一句话", short: "30 秒", medium: "1 分钟", deep: "参考", followup: "追问", project: "项目", risk: "风险", framework: "框架", coach: "教练", notes: "补充", points: "要点", origin: "原题", generic: "内容" };
    const byId = questionMap();
    const questionsByDomain = {};
    D.questions.forEach((q) => { (questionsByDomain[q.domain] = questionsByDomain[q.domain] || []).push(q); });

    function renderDomainChips() {
      $("#ex-domain").innerHTML = [["all", "全部领域"]].concat(domainKeys.map((k) => [k, domainLabel(k)])).map(([v, l]) =>
        chipButton(l, state.domain === v, ' data-domain="' + esc(v) + '"')).join("");
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
      return questionsByDomain[state.domain] || [];
    }

    function currentQuestion() { return byId[state.qid]; }

    function defaultSelection() {
      if (state.domain !== "all") {
        return { domain: state.domain, question: domainQuestionList()[0] || null };
      }
      const domain = domainKeys.find((k) => (questionsByDomain[k] || []).length);
      if (!domain) return { domain: "all", question: null };
      return { domain: domain, question: (questionsByDomain[domain] || [])[0] || null };
    }

    function sidebarEmptyHTML() {
      return '<div class="empty"><p class="muted">暂无场景。</p><p class="muted">切换领域或清空搜索条件。</p></div>';
    }

    function emptyMainHTML() {
      return '<div class="empty">' +
        '<h2>暂无可加载的场景</h2>' +
        '<p class="muted">当前领域或搜索条件下没有题卡。</p>' +
        '<div class="hero-actions"><a class="btn btn-secondary" href="questions.html"' + linkAttrs("打开问题库") + '>打开问题库</a></div>' +
      "</div>";
    }

    function emptyRightHTML() {
      return '<div class="ex-pane-head"><span>状态</span></div>' +
        '<div class="ex-pane-body"><div class="ex-block"><span class="ex-block-label">暂无场景</span>' +
        '<p class="muted">切换领域或清空搜索条件。</p></div></div>';
    }

    function renderEmptyState() {
      $("#ex-main").innerHTML = emptyMainHTML();
      $("#ex-right").innerHTML = emptyRightHTML();
    }

    function questionItemHTML(q) {
      const m = store.mastery[q.id];
      const label = q.question + " · " + q.id;
      return '<button class="ex-item' + (store.done[q.id] ? " done" : "") + '" type="button" data-id="' + esc(q.id) + '"' +
        controlAttrs(label, q.id === state.qid) + ">" +
        '<span class="ex-item-dot"></span>' +
        '<span class="ex-item-main"><span class="ex-item-title">' + esc(q.question) + "</span>" +
        '<span class="ex-item-meta">' + esc(q.id) + " · " + esc(domainLabel(q.domain)) + (m != null ? " · 掌握 " + m + "/5" : "") + "</span></span>" +
      "</button>";
    }

    function renderSidebar() {
      const el = $("#ex-sidebar");
      if (!D.questions.length) {
        $("#ex-count").textContent = "0 个场景";
        el.innerHTML = sidebarEmptyHTML();
        return;
      }
      if (state.query) {
        const list = filtered().slice(0, 400);
        $("#ex-count").textContent = list.length + " 个匹配";
        if (!list.length) {
          el.innerHTML = sidebarEmptyHTML();
          return;
        }
        el.innerHTML = list.map(questionItemHTML).join("");
        highlightSidebar();
        return;
      }
      if (state.domain === "all") {
        $("#ex-count").textContent = domainKeys.length + " 个领域";
        if (!domainKeys.length) { el.innerHTML = sidebarEmptyHTML(); return; }
        el.innerHTML = domainKeys.map((k) => {
          const n = D.stats.domains[k] || 0;
          const label = domainLabel(k) + " · " + n + " 题";
          return '<button class="ex-item ex-domain-item" type="button" data-domain="' + esc(k) + '"' + controlAttrs(label, false) + ">" +
          '<span class="ex-item-dot"></span>' +
          '<span class="ex-item-main"><span class="ex-item-title">' + esc(domainLabel(k)) + "</span>" +
          '<span class="ex-item-meta">' + n + " 题</span></span></button>";
        }).join("");
        return;
      }
      const list = domainQuestionList();
      $("#ex-count").textContent = list.length + " 个场景";
      if (!list.length) {
        el.innerHTML = sidebarEmptyHTML();
        return;
      }
      el.innerHTML = list.map(questionItemHTML).join("");
      highlightSidebar();
    }

    function highlightSidebar() {
      $$("#ex-sidebar .ex-item").forEach((b) => {
        const active = !!b.dataset.id && b.dataset.id === state.qid;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function renderRight() {
      const q = currentQuestion();
      const el = $("#ex-right");
      if (!q) { el.innerHTML = emptyRightHTML(); return; }
      const m = store.mastery[q.id];
      const srcs = (q.sources || []).map((s) => esc(s.company || "") + " · " + esc(s.position || "") + " · " + esc(s.date || "")).join("<br>");
      el.innerHTML =
        '<div class="ex-pane-head"><span>状态</span></div>' +
        '<div class="ex-pane-body">' +
          '<div class="ex-block"><span class="ex-block-label">掌握度</span><div class="ex-mastery">' +
            [0, 1, 2, 3, 4, 5].map((v) => '<button class="ex-m-btn' + (m === v ? " active" : "") + '" type="button" data-m="' + v + '"' +
              controlAttrs("掌握度 " + v + " / 5", m === v) + ">" + v + "</button>").join("") +
          "</div></div>" +
          '<div class="ex-block"><span class="ex-block-label">标签</span><div class="tags">' + tagsHTML(q) + "</div></div>" +
          '<div class="ex-block"><span class="ex-block-label">主题</span><div class="ex-topics">' + (q.topic || []).map((t) => '<span class="tag">' + esc(t) + "</span>").join("") + "</div></div>" +
          (srcs ? '<div class="ex-block"><span class="ex-block-label">来源</span><div class="ex-sources">' + srcs + "</div></div>" : "") +
        "</div>";
    }

    function syncControls() {
      const playBtn = $("#ex-play");
      if (playBtn) {
        playBtn.innerHTML = state.playing ? ICONS.pause : ICONS.play;
        playBtn.setAttribute("aria-label", "播放或暂停");
        playBtn.setAttribute("title", "播放或暂停");
      }
      const db = $("#ex-done");
      const q = currentQuestion();
      if (db && q) {
        const done = !!store.done[q.id];
        const label = done ? "已掌握" : "标记掌握";
        db.textContent = label;
        db.setAttribute("aria-pressed", done ? "true" : "false");
        db.setAttribute("aria-label", label);
        db.setAttribute("title", label);
        db.classList.toggle("btn-primary", done);
        db.classList.toggle("btn-secondary", !done);
      }
    }

    function renderMain() {
      const q = currentQuestion();
      const el = $("#ex-main");
      if (!q) { el.innerHTML = emptyMainHTML(); return; }
      const total = state.stages.length;
      state.stage = Math.min(Math.max(state.stage, 0), Math.max(0, total - 1));
      const si = state.stage;
      const sec = state.stages[si] || { title: "内容", short: "内容", kind: "generic", html: "", diagram: null };
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
          iconButton("ex-prev", "上一阶段", ICONS.chevronL) +
          iconButton("ex-play", "播放或暂停", state.playing ? ICONS.pause : ICONS.play) +
          iconButton("ex-next", "下一阶段", ICONS.chevronR) +
          iconButton("ex-reset", "回到第一阶段", ICONS.reset) +
          '<button class="chip" id="ex-speed" type="button" data-speed="' + state.speed + '"' + controlAttrs("播放速度 " + state.speed + "×") + ">" + state.speed + "×</button>" +
          '<span class="ex-progress"><b>' + String(si + 1) + "</b> / " + total + " · " + esc(sec.short || sec.title) + "</span>" +
          '<button class="btn btn-sm ' + (done ? "btn-primary" : "btn-secondary") + '" id="ex-done" type="button"' + controlAttrs(done ? "已掌握" : "标记掌握", done) + ">" + (done ? "已掌握" : "标记掌握") + "</button>" +
        "</div>" +
        '<div class="ex-dots">' + state.stages.map((x, i) => '<button class="ex-dot' + (i === si ? " active" : "") + (i < si ? " seen" : "") + '" type="button" data-i="' + i + '"' +
          controlAttrs("第 " + (i + 1) + " 阶段：" + (x.title || "内容"), i === si) + "></button>").join("") + "</div>";
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
      if (b) {
        const label = "播放速度 " + state.speed + "×";
        b.dataset.speed = state.speed;
        b.textContent = state.speed + "×";
        b.setAttribute("aria-label", label);
        b.setAttribute("title", label);
      }
    }

    function toggleDone() {
      const q = currentQuestion();
      if (!q) return;
      const wasDone = !!store.done[q.id];
      if (wasDone) delete store.done[q.id];
      else store.done[q.id] = true;
      saveExploreStore(store);
      showFeedback(wasDone ? "已取消掌握标记" : "已标记掌握");
      renderMain();
      renderSidebar();
    }

    function selectQuestion(id) {
      state.qid = id;
      const q = currentQuestion();
      if (!q) {
        state.qid = null;
        state.stages = [];
        state.stage = 0;
        stopPlay();
        highlightSidebar();
        renderEmptyState();
        return;
      }
      state.stages = stagesFor(q, false);
      state.stage = store.last[id] != null && store.last[id] < state.stages.length ? store.last[id] : 0;
      stopPlay();
      highlightSidebar();
      renderMain();
      renderRight();
    }

    function showDomain(domain) {
      state.domain = domain;
      state.query = "";
      const si = $("#ex-search");
      if (si) si.value = "";
      const list = state.domain === "all" ? [] : domainQuestionList();
      state.qid = list.length ? list[0].id : null;
      renderDomainChips();
      renderSidebar();
      selectQuestion(state.qid);
    }

    function showSearch(value) {
      state.query = value;
      let list = [];
      if (state.query) list = filtered().slice(0, 400);
      else if (state.domain !== "all") list = domainQuestionList();
      const nextQid = list.some((q) => q.id === state.qid) ? state.qid : (list.length ? list[0].id : null);
      const changed = nextQid !== state.qid;
      state.qid = nextQid;
      renderSidebar();
      if (changed) selectQuestion(state.qid);
    }

    const initialQ = params.get("q");
    if (initialQ && byId[initialQ]) {
      state.qid = initialQ;
      state.domain = domainKeys.includes(byId[initialQ].domain) ? byId[initialQ].domain : "all";
    }
    else {
      const initialSelection = defaultSelection();
      state.domain = initialSelection.domain;
      state.qid = initialSelection.question ? initialSelection.question.id : null;
    }
    renderDomainChips();
    renderSidebar();
    selectQuestion(state.qid);
    if (params.has("stage")) {
      const stageParam = Number(params.get("stage"));
      if (!Number.isNaN(stageParam)) goStage(stageParam);
    }

    $("#ex-search").addEventListener("input", debounce((e) => showSearch(e.target.value), 120));
    $("#ex-domain").addEventListener("click", (e) => {
      const b = e.target.closest("[data-domain]");
      if (!b) return;
      showDomain(b.dataset.domain);
    });
    $("#ex-sidebar").addEventListener("click", (e) => {
      const b = e.target.closest(".ex-item");
      if (!b) return;
      if (b.dataset.domain) {
        showDomain(b.dataset.domain);
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
      showFeedback("掌握度已更新为 " + v + " / 5");
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
    const storedStages = readJSON("os.sys.stage", {});
    let stageStore = storedStages && typeof storedStages === "object" && !Array.isArray(storedStages) ? storedStages : {};

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
        const label = s.title + " · " + domainLabel(s.domain);
        const stages = (s.stages || []).length;
        return '<button class="ex-item' + (s.id === state.selected ? " active" : "") + '" type="button" data-id="' + esc(s.id) + '"' +
          controlAttrs(label, s.id === state.selected) + ">" +
          '<span class="ex-item-dot"></span>' +
          '<span class="ex-item-main"><span class="ex-item-title">' + esc(s.title) + "</span>" +
          '<span class="ex-item-meta">' + esc(domainLabel(s.domain)) + " · " + stages + " 阶段 · " + s.diagram_count + " 图</span></span>" +
        "</button>";
      }).join("");
    }

    function highlightSidebar() {
      $$("#sys-sidebar .ex-item").forEach((b) => {
        const active = b.dataset.id === state.selected;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function syncControls() {
      const playBtn = $("#sys-play");
      if (playBtn) {
        playBtn.innerHTML = state.playing ? ICONS.pause : ICONS.play;
        playBtn.setAttribute("aria-label", "播放或暂停");
        playBtn.setAttribute("title", "播放或暂停");
      }
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
          (hintShown ? "" : '<button class="btn btn-secondary btn-sm soc-btn" type="button" data-soc="hint"' + controlAttrs("显示提示") + ">显示提示</button>") +
          (hintShown && !pointShown ? '<button class="btn btn-primary btn-sm soc-btn" type="button" data-soc="point"' + controlAttrs("显示要点") + ">显示要点</button>" : "") +
          (pointShown && i < steps.length - 1 ? '<button class="btn btn-secondary btn-sm soc-btn" type="button" data-soc="next"' + controlAttrs("下一问") + ">下一问</button>" : "") +
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
      const stageTitle = st.stage_label || st.title || "阶段";
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
          '<div class="ex-stage-title"><span class="ex-stage-idx">' + String(si + 1).padStart(2, "0") + "</span> " + esc(stageTitle) + "</div>" +
          (st.socratic ? socraticHTML(st.socratic) : "") +
          (st.diagram ? '<div class="sys-diagram dg-scroll"><div class="dg" id="sys-diagram"></div></div>' : "") +
          '<div class="ex-stage-body q-body sys-stage-body">' + (st.html || "") + "</div>" +
        "</div>" +
        '<div class="ex-controls">' +
          iconButton("sys-prev", "上一阶段", ICONS.chevronL) +
          iconButton("sys-play", "播放或暂停", state.playing ? ICONS.pause : ICONS.play) +
          iconButton("sys-next", "下一阶段", ICONS.chevronR) +
          iconButton("sys-reset", "回到第一阶段", ICONS.reset) +
          '<button class="chip" id="sys-speed" type="button" data-speed="' + state.speed + '"' + controlAttrs("播放速度 " + state.speed + "×") + ">" + state.speed + "×</button>" +
          '<span class="ex-progress"><b>' + String(si + 1) + "</b> / " + stages.length + " · " + esc(stageTitle) + "</span>" +
        "</div>" +
        '<div class="ex-dots">' + stages.map((x, i) => '<button class="ex-dot' + (i === si ? " active" : "") + (i < si ? " seen" : "") + '" type="button" data-i="' + i + '"' +
          controlAttrs("阶段 " + (i + 1) + "：" + (x.stage_label || x.title || ""), i === si) + "></button>").join("") + "</div>";
      if (st.diagram) mountDiagram($("#sys-diagram"), st.diagram);
    }

    function renderRight() {
      const sys = current();
      const el = $("#sys-right");
      if (!sys) { el.innerHTML = ""; return; }
      const related = D.questions.map((q, i) => ({ q: q, i: i, score: topicOverlap(sys.topic, q.topic) }))
        .sort((a, b) =>
          (b.score - a.score) ||
          (Number(b.q.domain === sys.domain) - Number(a.q.domain === sys.domain)) ||
          (Number(b.q.frequency === "high") - Number(a.q.frequency === "high")) ||
          (a.i - b.i))
        .slice(0, 10)
        .map((x) => x.q);
      let html = '<div class="ex-pane-head"><span>关联题卡</span></div><div class="ex-pane-body">';
      if (!related.length) {
        html += '<p class="muted" style="padding:12px 14px">暂无关联题卡。</p>';
      } else {
        html += related.map((q) =>
          '<button class="ex-item" type="button" data-qid="' + esc(q.id) + '"' + controlAttrs(q.question + " · " + q.id, false) + ">" +
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
      writeJSON("os.sys.stage", stageStore);
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
      if (b) {
        const label = "播放速度 " + state.speed + "×";
        b.dataset.speed = state.speed;
        b.textContent = state.speed + "×";
        b.setAttribute("aria-label", label);
        b.setAttribute("title", label);
      }
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
    if (params.has("stage")) {
      const stageParam = Number(params.get("stage"));
      if (!Number.isNaN(stageParam)) goStage(stageParam);
    }

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
    const storedStages = readJSON("os.iv.stage", {});
    let stageStore = storedStages && typeof storedStages === "object" && !Array.isArray(storedStages) ? storedStages : {};
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
        const count = (iv.items || []).length;
        const label = (iv.company || "") + (iv.business ? " · " + iv.business : "") + " · " + (iv.date || "");
        return '<button class="ex-item' + (iv.interview_id === state.selected ? " active" : "") + '" type="button" data-id="' + esc(iv.interview_id) + '"' +
          controlAttrs(label, iv.interview_id === state.selected) + ">" +
          '<span class="ex-item-dot"></span>' +
          '<span class="ex-item-main"><span class="ex-item-title">' + esc(iv.company || "") + (iv.business ? ' · ' + esc(iv.business) : '') + '</span>' +
          '<span class="ex-item-meta">' + esc(iv.date || "") + (iv.position ? ' · ' + esc(iv.position) : '') + " · " + (count ? count + " 题" : "原文记录") + "</span></span>" +
        '</button>';
      }).join("");
      if (!items.some((iv) => iv.interview_id === state.selected)) state.selected = items[0].interview_id;
      highlightSidebar();
    }

    function highlightSidebar() {
      $$("#iv-sidebar .ex-item").forEach((b) => {
        const active = b.dataset.id === state.selected;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });
    }

    function selectInterview(id) {
      state.selected = id;
      const iv = current();
      if (!iv) return;
      state.stages = (iv.items && iv.items.length ? iv.items : []).map((it) => ({ n: it.n, text: it.text, section: it.section || "", title: "第 " + it.n + " 题" }));
      if (!state.stages.length) {
        const rawHTML = iv.body_html || (iv.sections || []).map((s) => s.html || "").join("");
        if (rawHTML) state.stages = [{ n: 0, text: rawHTML, section: "", title: "原文记录" }];
      }
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
      if (playBtn) {
        playBtn.innerHTML = state.playing ? ICONS.pause : ICONS.play;
        playBtn.setAttribute("aria-label", "播放或暂停");
        playBtn.setAttribute("title", "播放或暂停");
      }
    }

    function renderMain() {
      const iv = current();
      const el = $("#iv-main");
      if (!iv) { el.innerHTML = '<p class="muted">左侧选择一篇面经。</p>'; return; }
      const total = state.stages.length;
      if (!total) {
        el.innerHTML = '<div class="ex-stage-head"><h2>' + esc(iv.company || "") + (iv.business ? " · " + esc(iv.business) : "") + '</h2></div>' +
          '<div class="ex-stage"><div class="ex-stage-title"><span class="ex-stage-idx">01</span> 原文记录</div>' +
          '<div class="ex-stage-body q-body">' + (iv.body_html || (iv.sections || []).map((s) => s.html || "").join("")) + "</div></div>" +
          (iv.notes_html ? '<div class="iv-notes q-body">' + iv.notes_html + "</div>" : "");
        return;
      }
      state.stage = Math.min(Math.max(state.stage, 0), total - 1);
      const si = state.stage;
      const st = state.stages[si];
      const isHTML = st.n === 0 && String(st.text || "").indexOf("<") !== -1;
      const isRawRecord = total === 1 && st.n === 0;
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
        (isRawRecord ? "" :
          '<div class="ex-controls">' +
            iconButton("iv-prev", "上一题", ICONS.chevronL) +
            iconButton("iv-play", "播放或暂停", state.playing ? ICONS.pause : ICONS.play) +
            iconButton("iv-next", "下一题", ICONS.chevronR) +
            iconButton("iv-reset", "回到第一题", ICONS.reset) +
            '<button class="chip" id="iv-speed" type="button" data-speed="' + state.speed + '"' + controlAttrs("播放速度 " + state.speed + "×") + ">" + state.speed + "×</button>" +
            '<span class="ex-progress"><b>' + String(si + 1) + "</b> / " + total + "</span>" +
          "</div>" +
          '<div class="ex-dots">' + state.stages.map((x, i) => '<button class="ex-dot' + (i === si ? " active" : "") + (i < si ? " seen" : "") + '" type="button" data-i="' + i + '"' +
            controlAttrs("第 " + (i + 1) + " 题", i === si) + "></button>").join("") + "</div>");
    }

    function renderRight() {
      const iv = current();
      const el = $("#iv-right");
      if (!iv) { el.innerHTML = ""; return; }
      const linked = iv.linked || [];
      const best = linked[0] || null;
      let html = '<div class="ex-pane-head"><span>关联题卡</span></div><div class="ex-pane-body">';
      if (!linked.length) {
        html += '<div class="ex-block"><p class="muted">先按原文逐题自测，再沉淀题卡。</p>' +
          '<div class="hero-actions"><a class="btn btn-secondary btn-sm" href="questions.html"' + linkAttrs("打开问题库") + '>打开问题库</a></div></div>';
      } else {
        html += '<div class="iv-links"><div class="iv-links-label">最佳匹配</div>' +
          '<button class="ex-item active" type="button" data-qid="' + esc(best.id) + '"' + controlAttrs(best.question + " · " + best.id, true) + '>' +
            '<span class="ex-item-dot"></span>' +
            '<span class="ex-item-main"><span class="ex-item-title">' + esc(best.question) + "</span>" +
            '<span class="ex-item-meta">' + esc(best.id) + " · " + esc(domainLabel(best.domain)) + " · 匹配 " + Number(best.score || 0).toFixed(2) + (best.diagrams ? " · 含图" : "") + "</span></span>" +
          "</button>";
        const alternatives = (best.alternatives || []).slice(0, 2);
        if (alternatives.length) {
          html += '<div class="iv-links-label">次优候选</div>' + alternatives.map((a) =>
            '<button class="ex-item" type="button" data-qid="' + esc(a.id) + '"' + controlAttrs(a.question + " · " + a.id, false) + '>' +
              '<span class="ex-item-dot"></span>' +
              '<span class="ex-item-main"><span class="ex-item-title">' + esc(a.question) + "</span>" +
              '<span class="ex-item-meta">' + esc(a.id) + " · 匹配 " + Number(a.score || 0).toFixed(2) + "</span></span>" +
            "</button>").join("");
        }
        html += "</div>";
        const q = questionMap()[best.id];
        if (q) {
          html += '<div class="iv-linked-body"><a class="iv-linked-title" href="explore.html?q=' + encodeURIComponent(q.id) + '"' + linkAttrs(q.question + " · 打开交互学习") + ">" + esc(q.question) + " · 打开交互学习</a>" +
            '<div class="q-body">' + sectionCardsHTML(q, false) + "</div></div>";
        }
      }
      html += "</div>";
      el.innerHTML = html;
      if (best) {
        const q = questionMap()[best.id];
        if (q) mountSectionDiagrams(el, q, false);
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
      writeJSON("os.iv.stage", stageStore);
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
      if (b) {
        const label = "播放速度 " + state.speed + "×";
        b.dataset.speed = state.speed;
        b.textContent = state.speed + "×";
        b.setAttribute("aria-label", label);
        b.setAttribute("title", label);
      }
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
    if (params.has("stage")) {
      const stageParam = Number(params.get("stage"));
      if (!Number.isNaN(stageParam)) goStage(stageParam);
    }
  }

  function shuffle(a) { const arr = a.slice(); for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

  function renderPractice() {
    const CONFIG_KEY = "os.practice.config";
    const MAX_SELF_ANSWER = 1200;
    const params = new URLSearchParams(location.search);
    const keys = Object.keys(D.stats.domains || {});
    const storedConfig = readJSON(CONFIG_KEY, {});
    const config = storedConfig && typeof storedConfig === "object" && !Array.isArray(storedConfig) ? storedConfig : {};
    const validCounts = [10, 20, 0];
    const count = validCounts.includes(Number(config.count)) ? Number(config.count) : 20;
    const restoredDomains = Array.isArray(config.domains) ? config.domains.filter((k) => keys.includes(k)) : keys;
    const sel = new Set(restoredDomains);
    const weakOnly = !!config.weakOnly;
    const byId = questionMap();
    const countOptions = [[10, "10 题"], [20, "20 题"], [0, "全部"]].map(([v, l]) =>
      '<option value="' + v + '"' + (v === count ? " selected" : "") + ">" + l + "</option>").join("");
    $("#page").innerHTML =
      "<h1>随机训练</h1>" +
      '<div id="p-config" class="panel">' +
        "<h2>训练设置</h2>" +
        '<label class="field"><span>题目数量</span><select id="p-count" aria-label="题目数量" title="题目数量">' + countOptions + "</select></label>" +
        '<div class="field"><span>范围</span><div class="chips" id="p-domains"></div>' +
          '<button class="btn btn-secondary btn-sm" id="p-all" type="button"' + controlAttrs("全选领域") + ">全选</button>" +
          '<button class="btn btn-secondary btn-sm" id="p-clear" type="button"' + controlAttrs("清空领域") + ">清空</button>" +
        "</div>" +
        '<label class="field"><span>只练薄弱题</span><input id="p-weak" type="checkbox"' + (weakOnly ? " checked" : "") + ' aria-label="只练薄弱题" title="只练薄弱题"><span class="muted" id="p-weak-count"></span></label>' +
        '<p class="muted" id="p-message" role="status" aria-live="polite"></p>' +
        '<button class="btn btn-primary" id="p-start" type="button"' + controlAttrs("开始训练") + ">开始训练</button>" +
      "</div>" +
      '<div id="p-session" class="panel" hidden></div>';

    function practiceHistory() {
      const store = masteryStore();
      return Array.isArray(store.history) ? store.history : [];
    }
    function latestGrades() {
      const latest = {};
      practiceHistory().forEach((r) => { if (r && r.id) latest[r.id] = Number(r.grade); });
      return latest;
    }
    function weakQuestionIds() {
      const latest = latestGrades();
      return new Set(Object.keys(latest).filter((id) => Number.isFinite(latest[id]) && latest[id] < 3));
    }
    function eligiblePool() {
      return D.questions.filter((q) => q.training_eligible !== false);
    }
    function updateWeakCount() {
      const n = weakQuestionIds().size;
      $("#p-weak-count").textContent = n ? n + " 道待复习" : "暂无薄弱题";
    }
    function saveConfig() {
      writeJSON(CONFIG_KEY, {
        count: Number($("#p-count").value),
        domains: Array.from(sel),
        weakOnly: $("#p-weak").checked
      });
    }
    function renderDomains() {
      $("#p-domains").innerHTML = keys.map((k) => chipButton(domainLabel(k), sel.has(k), ' data-d="' + esc(k) + '"')).join("");
    }
    renderDomains();
    updateWeakCount();
    $("#p-domains").addEventListener("click", (e) => {
      const b = e.target.closest("[data-d]"); if (!b) return;
      const k = b.dataset.d;
      if (sel.has(k)) sel.delete(k); else sel.add(k);
      renderDomains(); saveConfig();
    });
    $("#p-all").addEventListener("click", () => { keys.forEach((k) => sel.add(k)); renderDomains(); saveConfig(); });
    $("#p-clear").addEventListener("click", () => { sel.clear(); renderDomains(); saveConfig(); });
    $("#p-count").addEventListener("change", saveConfig);
    $("#p-weak").addEventListener("change", saveConfig);
    $("#p-start").addEventListener("click", () => {
      saveConfig();
      const count = Number($("#p-count").value);
      let pool = eligiblePool().filter((q) => sel.has(q.domain));
      if ($("#p-weak").checked) pool = pool.filter((q) => weakQuestionIds().has(q.id));
      pool = shuffle(pool);
      if (count > 0) pool = pool.slice(0, count);
      if (!pool.length) {
        $("#p-message").textContent = "当前范围没有可训练题卡，调整领域或关闭只练薄弱题。";
        return;
      }
      $("#p-message").textContent = "";
      start(pool);
    });

    function dimensionSet(q) {
      const key = q.type === "technical" ? "technical" : (q.type === "negotiation" ? "negotiation" : "project");
      return DIMENSION_SETS[key] || [];
    }
    function scorePanelHTML(q) {
      const totals = [0, 1, 2, 3, 4, 5].map((v) =>
        '<button class="score-btn" type="button" data-total="' + v + '"' + controlAttrs("总分 " + v + " / 5", false) + ' disabled>' + v + '</button>').join("");
      const dims = dimensionSet(q).map((d) =>
        '<div class="score-dim" data-dim="' + esc(d) + '"><span class="score-dim-label">' + esc(DIMENSION_LABELS[d] || d) + '</span>' +
        [0, 1, 2, 3, 4, 5].map((v) =>
          '<button class="score-btn small" type="button" data-v="' + v + '"' + controlAttrs((DIMENSION_LABELS[d] || d) + " " + v + " / 5", false) + ' disabled>' + v + '</button>').join("") +
        '</div>').join("");
      return '<div id="p-score" class="score-panel" hidden>' +
        '<div class="score-total"><span class="score-dim-label">总分</span>' + totals + '</div>' +
        '<div class="score-dims">' + dims + '</div>' +
        '<button class="btn btn-primary" id="p-submit" type="button"' + controlAttrs("提交评分") + ' disabled>提交评分</button>' +
      '</div>';
    }

    function start(pool) {
      $("#p-config").hidden = true;
      const session = $("#p-session");
      session.hidden = false;
      let idx = 0;
      const results = [];
      let revealed = false;
      let selfAnswer = "";
      let graded = false;
      let selectedTotal = null;
      let selectedDims = {};

      function captureSelfAnswer() {
        const el = $("#p-self");
        return String((el && el.value) || "").trim().slice(0, MAX_SELF_ANSWER);
      }
      function enableScoring() {
        $$("#p-score .score-btn", session).forEach((b) => { b.disabled = false; });
      }
      function updateSubmit() {
        const btn = $("#p-submit");
        if (btn) btn.disabled = selectedTotal == null;
      }
      function syncTotalButtons() {
        $$("#p-score [data-total]", session).forEach((b) => {
          const active = Number(b.dataset.total) === selectedTotal;
          b.classList.toggle("active", active);
          b.setAttribute("aria-pressed", active ? "true" : "false");
        });
      }
      function syncDimButtons() {
        $$("#p-score .score-dim", session).forEach((row) => {
          const dim = row.dataset.dim;
          $$('[data-v]', row).forEach((b) => {
            const active = selectedDims[dim] === Number(b.dataset.v);
            b.classList.toggle("active", active);
            b.setAttribute("aria-pressed", active ? "true" : "false");
          });
        });
      }
      function record(q) {
        if (graded || selectedTotal == null) return;
        graded = true;
        const dims = Object.assign(dimensionsFor(q, selectedTotal), selectedDims);
        const answer = revealed ? selfAnswer : captureSelfAnswer();
        recordMastery(q, selectedTotal, dims, revealed, answer);
        results.push({ q, total: selectedTotal, dims, revealed, selfAnswer: answer });
        showFeedback(selectedTotal < 3 ? "已记录 " + selectedTotal + " / 5，已加入复习" : "已记录 " + selectedTotal + " / 5");
        $$("#p-score button", session).forEach((b) => { b.disabled = true; });
        $("#p-show").disabled = true;
        $("#p-ready").disabled = true;
        $("#p-self").readOnly = true;
        window.setTimeout(() => {
          idx++;
          idx < pool.length ? render() : summary();
        }, 700);
      }
      function render() {
        const q = pool[idx];
        revealed = false;
        selfAnswer = "";
        graded = false;
        selectedTotal = null;
        selectedDims = {};
        session.innerHTML =
          '<div class="practice-head"><span class="muted">第 ' + (idx + 1) + " / " + pool.length + ' 题</span><div class="progress-bar"><div class="progress-fill" style="width:' + (idx / pool.length * 100) + '%"></div></div></div>' +
          "<h2>" + esc(q.question) + "</h2>" +
          '<div class="tags">' + tagsHTML(q) + "</div>" +
          '<label class="field" style="display:block"><span>自答</span>' +
            '<textarea id="p-self" rows="4" maxlength="' + MAX_SELF_ANSWER + '" placeholder="先写出回答要点" aria-label="自答要点" title="自答要点"></textarea>' +
          "</label>" +
          '<div class="practice-actions">' +
            '<button class="btn btn-secondary" id="p-ready" type="button"' + controlAttrs("我已想好", false) + ">我已想好</button>" +
            '<button class="btn btn-secondary" id="p-show" type="button"' + controlAttrs("显示答案") + " disabled>显示答案</button>" +
          "</div>" +
          '<div id="p-answer" class="q-body" hidden>' + sectionCardsHTML(q, false) + "</div>" +
          scorePanelHTML(q);
        const selfEl = $("#p-self");
        const readyBtn = $("#p-ready");
        const showBtn = $("#p-show");
        let ready = false;
        let diagramsMounted = false;
        function syncReveal() {
          showBtn.disabled = !(ready || String(selfEl.value || "").trim().length > 0);
        }
        selfEl.addEventListener("input", syncReveal);
        readyBtn.addEventListener("click", () => {
          ready = !ready;
          const label = ready ? "已想好" : "我已想好";
          readyBtn.textContent = label;
          readyBtn.setAttribute("aria-pressed", ready ? "true" : "false");
          readyBtn.setAttribute("aria-label", label);
          readyBtn.setAttribute("title", label);
          syncReveal();
        });
        showBtn.addEventListener("click", () => {
          if (showBtn.disabled) return;
          revealed = true;
          selfAnswer = captureSelfAnswer();
          selfEl.readOnly = true;
          readyBtn.disabled = true;
          showBtn.disabled = true;
          showBtn.textContent = "答案已揭晓";
          $("#p-answer").hidden = false;
          $("#p-score").hidden = false;
          if (!diagramsMounted) { mountSectionDiagrams($("#p-answer"), q, false); diagramsMounted = true; }
          enableScoring();
          showFeedback("答案已揭晓，请评分");
        });
        session.addEventListener("click", (e) => {
          const totalBtn = e.target.closest("[data-total]");
          if (totalBtn) {
            selectedTotal = Number(totalBtn.dataset.total);
            syncTotalButtons();
            updateSubmit();
            return;
          }
          const dimBtn = e.target.closest(".score-dim [data-v]");
          if (dimBtn) {
            const dim = dimBtn.closest(".score-dim").dataset.dim;
            selectedDims[dim] = Number(dimBtn.dataset.v);
            syncDimButtons();
            return;
          }
          if (e.target.closest("#p-submit")) record(q);
        });
      }
      function summary() {
        const total = results.length;
        const ok = results.filter((r) => r.total >= 4).length;
        const fuzzy = results.filter((r) => r.total >= 2 && r.total < 4).length;
        const bad = results.filter((r) => r.total < 2).length;
        const weak = results.filter((r) => r.total < 3).map((r) => r.q.id);
        session.innerHTML =
          "<h2>本轮完成</h2>" +
          '<div class="stats"><div class="stat"><b>' + ok + "</b><span>掌握</span></div><div class=\"stat\"><b>" + fuzzy + "</b><span>待巩固</span></div><div class=\"stat\"><b>" + bad + "</b><span>不会</span></div></div>" +
          (weak.length ? "<h3>建议复习</h3><div class=\"q-list\">" + weak.map((id) => { const q = byId[id]; return q ? '<a class="q-row" style="grid-template-columns:1fr" href="questions.html#' + encodeURIComponent(q.id) + '"' + linkAttrs(q.question + " · " + q.id) + '>' + esc(q.question) + "</a>" : ""; }).join("") + "</div>" : "") +
          '<div class="hero-actions" style="margin-top:16px"><button class="btn btn-primary" id="p-again" type="button"' + controlAttrs("再来一组") + '>再来一组</button><a class="btn btn-secondary" href="profile.html"' + linkAttrs("查看画像") + '>查看画像</a></div>';
        $("#p-again").addEventListener("click", () => location.reload());
      }
      render();
    }

    if (params.get("queue") === "1") {
      const queued = readJSON(PRACTICE_QUEUE_KEY, []);
      const pool = (Array.isArray(queued) ? queued : []).map((id) => byId[id]).filter((q) => q && q.training_eligible !== false);
      if (pool.length) {
        removeText(PRACTICE_QUEUE_KEY);
        start(pool);
      }
    }
  }

  function renderProfile() {
    $("#page").innerHTML = "<h1>能力画像</h1><div id=\"p-profile\"></div>";
    const el = $("#p-profile");
    const store = masteryStore();
    const history = Array.isArray(store.history) ? store.history : [];
    const questions = store.questions || {};
    const byId = questionMap();
    if (!history.length && !Object.keys(questions).length) {
      el.innerHTML = '<div class="panel"><p class="muted">还没有训练记录，先去<a href="practice.html">随机训练</a>几次。</p></div>';
      return;
    }
    const byDomain = {};
    history.forEach((r) => {
      const k = r.domain || "other";
      byDomain[k] = byDomain[k] || { total: 0, ok: 0 };
      byDomain[k].total++;
      if (Number(r.grade) >= 4) byDomain[k].ok++;
    });
    const domainRows = Object.keys(byDomain).map((k) => {
      const v = byDomain[k];
      const pct = Math.round(v.ok / v.total * 100);
      return '<div class="bar"><span class="bar-label">' + esc(domainLabel(k)) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div><span class="muted">' + pct + "%</span></div>";
    }).join("");

    function dimensionRows(type, title) {
      const dims = DIMENSION_SETS[type] || [];
      const sums = {}, counts = {};
      Object.keys(questions).forEach((id) => {
        const q = byId[id];
        if (!q || (type === "technical" && q.type !== "technical") ||
            (type === "project" && q.type === "technical") ||
            (type === "negotiation" && q.type !== "negotiation")) return;
        const dim = questions[id].dimensions || {};
        dims.forEach((d) => {
          if (!Number.isFinite(Number(dim[d]))) return;
          sums[d] = (sums[d] || 0) + Number(dim[d]);
          counts[d] = (counts[d] || 0) + 1;
        });
      });
      const rows = dims.filter((d) => counts[d]).map((d) => {
        const avg = sums[d] / counts[d];
        const pct = Math.round(avg / 5 * 100);
        return '<div class="bar"><span class="bar-label">' + esc(DIMENSION_LABELS[d] || d) + '</span><div class="bar-track"><div class="bar-fill" style="width:' + pct + '%"></div></div><span class="muted">' + avg.toFixed(1) + "/5</span></div>";
      }).join("");
      return rows ? '<div class="panel"><h2>' + esc(title) + '</h2>' + rows + '</div>' : "";
    }

    const weakIds = (store.weakQueue || []).slice(-10).reverse();
    const weak = weakIds.map((id) => {
      const q = byId[id];
      return q ? '<a class="q-row" style="grid-template-columns:1fr" href="questions.html#' + encodeURIComponent(q.id) + '"' + linkAttrs(q.question + " · " + q.id) + '>' + esc(q.question) + "</a>" : "";
    }).join("");
    const recent = history.slice(-10).reverse().map((r) => {
      const q = byId[r.id];
      return '<div class="rec-row"><span>' + (q ? esc(q.question) : esc(r.id)) + '</span><span class="muted">' + Number(r.grade) + ' / 5</span></div>';
    }).join("");
    const reviewRows = (store.reviewQueue || []).slice(0, 8).map((x) => {
      const q = byId[x.id];
      return '<div class="rec-row"><span>' + (q ? esc(q.question) : esc(x.id)) + '</span><span class="muted">' + esc(x.reason) + '</span></div>';
    }).join("");
    el.innerHTML =
      '<div class="panel"><h2>领域掌握度</h2>' + (domainRows || '<p class="muted">暂无练习记录。</p>') + '<p class="muted" style="margin-top:12px">基于 ' + history.length + ' 次作答估算</p></div>' +
      dimensionRows("technical", "技术题维度") +
      dimensionRows("project", "行为题维度") +
      dimensionRows("negotiation", "谈判题维度") +
      (weak ? '<div class="panel" style="margin-top:16px"><h2>最近薄弱</h2><div class="q-list">' + weak + '</div><div class="hero-actions" style="margin-top:12px"><button class="btn btn-primary" id="p-target" type="button"' + controlAttrs("一键定向训练") + '>一键定向训练</button></div></div>' : "") +
      (reviewRows ? '<div class="panel" style="margin-top:16px"><h2>复习队列</h2>' + reviewRows + '</div>' : "") +
      '<div class="panel" style="margin-top:16px"><h2>最近记录</h2>' + (recent || '<p class="muted">暂无记录。</p>') + '</div>' +
      '<div style="margin-top:16px"><button class="btn btn-secondary" id="p-reset" type="button"' + controlAttrs("清空训练记录") + ">清空训练记录</button></div>";
    const target = $("#p-target");
    if (target) {
      target.addEventListener("click", () => {
        writeJSON(PRACTICE_QUEUE_KEY, weakIds.slice());
        location.href = "practice.html?queue=1";
      });
    }
    $("#p-reset").addEventListener("click", () => {
      const backup = masteryStore();
      writeJSON("os.mastery.v2.backup", backup);
      saveMasteryStore(emptyMasteryStore());
      showFeedback("已清空训练记录", () => { saveMasteryStore(backup); });
      setTimeout(() => location.reload(), 500);
    });
  }

  function boot() {
    initTheme();
    migrateMastery();
    renderNav();
    const page = document.body.dataset.page;
    const map = { index: renderIndex, questions: renderQuestions, systems: renderSystems, explore: renderExplore, interviews: renderInterviews, practice: renderPractice, profile: renderProfile };
    (map[page] || renderIndex)();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
