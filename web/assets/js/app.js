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
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'
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

  function renderIndex() {
    const s = D.stats || {};
    const domainKeys = Object.keys(s.domains || {});
    const domains = domainKeys.map((k) => ({ k: k, n: s.domains[k] || 0 })).sort((a, b) => b.n - a.n);
    const maxN = domains.length ? domains[0].n : 1;
    const recent = D.interviews.slice(0, 3);
    $("#page").innerHTML =
      "<h1>Interview OS</h1>" +
      '<p class="lead">个人面试知识库 · 训练 · 表达 · 谈判</p>' +
      '<div class="hero-actions"><a class="btn btn-primary" href="practice.html">开始训练</a><a class="btn btn-secondary" href="questions.html">浏览问题库</a></div>' +
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
        '<div class="q-body">' + (q.body_html || "") + "</div>" +
        (srcs ? '<div class="q-sources">来源：' + srcs + "</div>" : "");
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

  function renderInterviews() {
    const params = new URLSearchParams(location.search);
    const state = { query: "", selected: null };
    const list = D.interviews;
    const byInterview = {};
    D.questions.forEach((q) => {
      (q.sources || []).forEach((s) => {
        if (s && s.interview_id) {
          (byInterview[s.interview_id] = byInterview[s.interview_id] || []).push(q);
        }
      });
    });

    function tocHTML(ivId) {
      const qs = byInterview[ivId] || [];
      if (!qs.length) return '<p class="muted">暂无标准化题目，原始记录见下方。</p>';
      const items = qs.map((q) =>
        '<li><a href="questions.html#' + encodeURIComponent(q.id) + '">' + esc(q.question) + '</a>' +
        '<span class="wiki-toc-meta">' + esc(q.id) + ' · ' + esc(domainLabel(q.domain)) + '</span></li>').join("");
      return '<ol class="wiki-toc-list">' + items + '</ol>';
    }

    function renderDetail(iv) {
      const el = $("#iv-main");
      if (!iv) { el.innerHTML = '<p class="muted">左侧选择一篇面经查看。</p>'; return; }
      const linked = byInterview[iv.interview_id] || [];
      el.innerHTML =
        '<article class="wiki-doc">' +
          '<header class="wiki-doc-head">' +
            '<h2>' + esc(iv.company || "") + (iv.business ? ' · ' + esc(iv.business) : '') + '</h2>' +
            '<div class="tags">' +
              (iv.position ? '<span class="tag">' + esc(iv.position) + '</span>' : '') +
              (iv.round ? '<span class="tag">' + esc(iv.round) + '</span>' : '') +
              (iv.date ? '<span class="tag">' + esc(iv.date) + '</span>' : '') +
            '</div>' +
          '</header>' +
          '<section class="wiki-toc"><h3>题目（' + linked.length + '）</h3>' + tocHTML(iv.interview_id) + '</section>' +
          '<section class="wiki-section"><h3>原始记录</h3><div class="q-body">' + (iv.body_html || "") + '</div></section>' +
        '</article>';
    }

    $("#page").innerHTML =
      "<h1>面经</h1>" +
      '<div class="toolbar">' +
        '<input class="search" id="iv-search" type="search" placeholder="搜索公司 / 业务 / 岗位 / 日期" aria-label="搜索面经" autocomplete="off">' +
        '<span class="muted" id="iv-count"></span>' +
      "</div>" +
      '<div class="wiki-layout">' +
        '<nav class="wiki-sidebar" id="iv-sidebar" aria-label="面经列表"></nav>' +
        '<section class="wiki-main" id="iv-main" aria-live="polite"></section>' +
      "</div>";

    function renderList() {
      const kw = state.query.trim().toLowerCase();
      const items = kw ? list.filter((iv) => ((iv.company || "") + " " + (iv.business || "") + " " + (iv.position || "") + " " + (iv.date || "") + " " + (iv.round || "")).toLowerCase().includes(kw)) : list;
      $("#iv-count").textContent = items.length + " 份面经";
      const el = $("#iv-sidebar");
      if (!items.length) { el.innerHTML = '<p class="muted">没有匹配的面经。</p>'; $("#iv-main").innerHTML = ""; return; }
      el.innerHTML = items.map((iv) => {
        const n = (byInterview[iv.interview_id] || []).length;
        return '<button class="wiki-item' + (iv.interview_id === state.selected ? " active" : "") + '" type="button" data-id="' + esc(iv.interview_id) + '">' +
          '<span class="wiki-item-title">' + esc(iv.company || "") + (iv.business ? ' · ' + esc(iv.business) : '') + '</span>' +
          '<span class="wiki-item-meta">' + esc(iv.date || "") + (iv.position ? ' · ' + esc(iv.position) : '') + '</span>' +
          '<span class="wiki-item-count">' + n + '</span>' +
        '</button>';
      }).join("");
      if (!items.some((iv) => iv.interview_id === state.selected)) state.selected = items[0].interview_id;
      renderDetail(items.find((iv) => iv.interview_id === state.selected));
    }

    $("#iv-search").addEventListener("input", debounce((e) => { state.query = e.target.value; renderList(); }, 120));
    $("#iv-sidebar").addEventListener("click", (e) => {
      const b = e.target.closest(".wiki-item");
      if (!b) return;
      state.selected = b.dataset.id;
      renderList();
    });

    const initial = params.get("iv");
    if (initial && list.some((x) => x.interview_id === initial)) state.selected = initial;
    else if (list.length) state.selected = list[0].interview_id;
    renderList();
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
          '<div id="p-answer" class="q-body" hidden>' + (q.body_html || "") + "</div>" +
          '<div class="grade-row" style="margin-top:14px"><button class="grade-btn ok" data-g="2">会</button><button class="grade-btn fuzzy" data-g="1">模糊</button><button class="grade-btn bad" data-g="0">不会</button></div>';
        $("#p-show").addEventListener("click", () => { $("#p-answer").hidden = false; });
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
    const map = { index: renderIndex, questions: renderQuestions, interviews: renderInterviews, practice: renderPractice, profile: renderProfile };
    (map[page] || renderIndex)();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
