# Interview OS 架构（v0）

## 产品闭环

```
原始输入（面经 / HR 问题 / 复盘 / 自补问题）
        |
        v
Interview Agent（parse / classify / extract / match / generate / validate）
        |
  技术面      HR 面      谈薪
        \      |       /
         v     v      v
         Knowledge Base
        |      |      |
      阅读   随机测试  模拟面试
        |      |      |
        +------+------+
               v
        Practice Record
               v
        Weakness Analysis
               v
        Review / Retrain
```

核心：面经负责提供真实问题，知识库负责沉淀，训练系统负责把知识变成能力。

## 页面

```
index.html       总览
questions.html   问题库
systems.html     系统图解（分阶段架构 / 数据流 / SOP）
explore.html     交互式学习（逐题阶段演示，历史别名：探索）
interviews.html  面经
practice.html    随机训练
profile.html     个人能力画像
```

## 技术栈（MVP）

- 内容：Markdown / YAML
- 构建：无（vanilla JS + CSS 直接跑）
- 训练状态：LocalStorage
- 部署：GitHub Pages

## 分阶段状态（2026-11-09）

- Phase 1 知识库：已落地，3169 题 / 170 面经 / 12 系统图解，支持搜索、排序、阶段目录与来源关联。
- Phase 2 训练系统：已落地，0-5 掌握度、维度评分、错题与复习队列、定向训练、LocalStorage 统一为 `os.mastery.v2`。
- Phase 3 AI 面试官：动态追问与评分仍预留，不上 MVP；当前以苏格拉底引导和人工复核代替。
- P1/P2/P3 开发计划与验收记录见 `docs/ux-audit-2026-11-09.md`、`docs/content-review-2026-11-09.md`。

## 决策记录

- 独立仓库，与 algo-sql-notebook 分离
- MVP 静态优先，不上 React / Vite
- 先落地 Schema + AGENTS.md，再补页面与生成器
- 视觉参考：HowToLiveBetter（内容优先 + Markdown + 搜索）、FDE（随机测试）
