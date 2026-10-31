# Interview OS

个人面试知识库与训练系统。以真实面经为输入，沉淀为结构化 QA，再用随机测试和表达训练把知识变成面试能力。

## 定位

不是「面经收藏夹」，而是：

面经 -> AI 结构化 -> QA / 知识沉淀 -> 主动训练 -> 薄弱点反馈 -> 再复习

## 内容

- Technical QA：15 个技术域（Spark / Flink / 数仓 / 存储引擎 / StarRocks / 大模型 / SQL 等）的标准技术题
- Project / 行为：项目深挖、HR 软素质、面试宝典等开放题
- 原始面经：`content/interviews/` 保留原始面经原文

## 使用

完全本地化、零构建，离线可用：

```bash
# 生成前端数据
python3 scripts/build.py

# 本地预览（任选其一）
python3 -m http.server 8000
# 或直接用浏览器打开 web/index.html
```

页面：总览 / 问题库 / 面经 / 随机训练 / 能力画像。训练记录保存在浏览器 LocalStorage。

## 目录与规范

见 [AGENTS.md](AGENTS.md)。

## 状态

当前约 3100+ 题 / 104 面经，静态站点（总览 / 问题库 / 面经 / 随机训练 / 能力画像）可用。
