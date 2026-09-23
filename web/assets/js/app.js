(function () {
  "use strict";
  const D = window.OS_DATA || { questions: [], interviews: [], stats: {}, domains: {} };
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

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
      (q.needs_personal_input ? '<span class="tag warn">待补个人</span>' : "");
  }

  function interviewCard(iv) {
    return '<button class="interview-card" data-id="' + esc(iv.interview_id) + '">' +
      '<div class="interview-card-head"><b>' + esc(iv.company || "") + " · " + esc(iv.business || "") + "</b><span class=\"muted\">" + esc(iv.date || "") + "</span></div>" +
      '<div class="muted">' + esc(iv.position || "") + "</div>" +
      "</button>";
  }

  function renderIndex() {
    const s = D.stats || {};
    const domainKeys = Object.keys(s.domains || {});
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
      "<h2>领域</h2>" +
      '<div class="domain-grid">' +
        domainKeys.map((k) => '<a class="domain-card" href="questions.html?domain=' + encodeURIComponent(k) + '"><b>' + esc(domainLabel(k)) + "</b><br><span>" + (s.domains[k] || 0) + " 题</span></a>").join("") +
      "</div>" +
      "<h2>最近面经</h2>" +
      (recent.length ? '<div class="interview-list">' + recent.map(interviewCard).join("") + "</div>" : '<p class="muted">还没有面经。</p>');
    $$(".interview-card", $("#page")).forEach((card) => {
      card.addEventListener("click", () => { location.href = "interviews.html"; });
    });
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
      el.innerHTML = list.map((q) =>
        '<button class="q-row" data-id="' + esc(q.id) + '">' +
          '<span class="q-id">' + esc(q.id) + "</span>" +
          '<span class="q-title">' + esc(q.question) + "</span>" +
          '<span class="q-meta">' + esc(domainLabel(q.domain)) + " · " + diffStars(q.difficulty) + "</span>" +
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

    $("#q-search").addEventListener("input", (e) => { state.query = e.target.value; renderList(); });
    $("#q-type").addEventListener("click", (e) => { const b = e.target.closest("[data-type]"); if (!b) return; state.type = b.dataset.type; renderChips(); renderList(); });
    $("#q-domain").addEventListener("click", (e) => { const b = e.target.closest("[data-domain]"); if (!b) return; state.domain = b.dataset.domain; renderChips(); renderList(); });
    $("#q-list").addEventListener("click", (e) => { const b = e.target.closest(".q-row"); if (!b) return; state.selected = b.dataset.id; highlight(); renderDetail(state.selected); });
  }

  function renderInterviews() {
    $("#page").innerHTML = '<h1>面经</h1><div class="interview-list" id="iv-list"></div><div id="iv-detail"></div>';
    const list = D.interviews;
    const el = $("#iv-list");
    if (!list.length) { el.innerHTML = '<p class="muted">还没有面经。</p>'; return; }
    el.innerHTML = list.map(interviewCard).join("");
    function open(id) {
      const iv = D.interviews.find((x) => x.interview_id === id);
      if (!iv) { $("#iv-detail").innerHTML = ""; return; }
      $("#iv-detail").innerHTML =
        '<div class="panel" style="margin-top:16px">' +
          "<h2>" + esc(iv.company || "") + " · " + esc(iv.business || "") + "</h2>" +
          '<div class="tags"><span class="tag">' + esc(iv.position || "") + "</span><span class=\"tag\">" + esc(iv.date || "") + "</span>" + (iv.round ? '<span class="tag">' + esc(iv.round) + "</span>" : "") + "</div>" +
          '<div class="q-body">' + (iv.body_html || "") + "</div>" +
        "</div>";
    }
    el.addEventListener("click", (e) => {
      const b = e.target.closest(".interview-card");
      if (!b) return;
      $$(".interview-card", el).forEach((c) => c.classList.remove("active"));
      b.classList.add("active");
      open(b.dataset.id);
    });
    open(list[0].interview_id);
    if (el.firstElementChild) el.firstElementChild.classList.add("active");
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
