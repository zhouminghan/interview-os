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

## 页面（第一版）

```
/            首页
/interviews  面经
/questions   问题库
/knowledge   知识库
/practice    随机训练
/profile     个人能力画像
```

## 技术栈（MVP）

- 内容：Markdown / YAML
- 构建：无（vanilla JS + CSS 直接跑）
- 训练状态：LocalStorage
- 部署：GitHub Pages

## 分阶段

- Phase 1 知识库：面经 -> 高质量 QA -> 可检索
- Phase 2 训练系统：随机抽题、错题、掌握度、复习
- Phase 3 AI 面试官：动态追问 + 评分（预留，不上 MVP）

## 决策记录

- 独立仓库，与 algo-sql-notebook 分离
- MVP 静态优先，不上 React / Vite
- 先落地 Schema + AGENTS.md，再补页面与生成器
- 视觉参考：HowToLiveBetter（内容优先 + Markdown + 搜索）、FDE（随机测试）
