# 内容 Schema

本文档描述当前实际使用的格式（与 `scripts/build.py` 的解析一致）。

## Technical QA

目录：`content/questions/technical/<domain>/<ID>.md`
领域：spark / flink / warehouse / storage / starrocks / llm / sql / lakehouse / hdfs / platform / system / network / algorithm / statistics / ml

```yaml
---
id: FLINK-0001
type: technical
question: Kafka-Flink 中间状态怎么设计，如何处理迟到、重复和退款最新状态
topic: [flink, state, event-time]
difficulty: 3        # 0-5，当前内容多为 0-4
frequency: high      # low | medium | high
source_type: ai_generated
sources:             # 可选，绑定来源面经
  - interview_id: ""
    company: ""
    position: ""
    date: ""
---
```

正文是 Markdown，用一级标题分节，固定为：

```markdown
# 一句话
...
# 30 秒回答
...
# 1 分钟回答
...
# 追问
- ...
```

正文可以自由使用表格、代码块、列表；`build.py` 会把正文渲染成 `body_html`。

## Project / 行为题

目录：`content/questions/behavioral/project/<ID>.md`

```yaml
---
id: PROJECT-0149
type: project
question: ...
topic: []
difficulty: 0
frequency: low
source_type: knowledge
needs_personal_input: true   # 需要个人经历时标 true，只搭框架
sources: []
---
```

正文结构（块引用放元信息）：

```markdown
> **要点提纲**：...
> **来源面经**：...

（正文：基于真实经历重新组织表达）

> 面试要点：...
```

## Negotiation

Schema 已规划（scenario / objective / leverage / responses / risks），当前仓库尚无内容。需要个人信息的题标 `needs_personal_input: true`，只搭框架，不虚构。

## 原始面经

目录：`content/interviews/<year>/<biz>/<ID>.md`

```yaml
---
interview_id: ...
company: ...
business: ...
position: ...
date: ...
round: ...
---
# 面经记录（原始）
1. 原题...
```

原始提问保留原文，不缩写、不改写。

## Source Type

当前内容实际使用：

```
knowledge          系统知识（八股 / 技术手册 / 题库）
ai_generated       AI 生成 / 补充的回答
```

规划中、暂未使用：

```
interview_record   面经原话
ai_supplement      AI 追加
user_note          用户笔记
```

## Question ID

前缀 + 4 位序号，稳定、不重排、不重复使用：

```
FLINK-0001  SPARK-0001  SQL-0001  STORAGE-0001
STARROCKS-0001  WAREHOUSE-0001  LLM-0001  LAKEHOUSE-0001
ALGORITHM-0001  ML-0001  NETWORK-0001  PLATFORM-0001
SYSTEM-0001  HDFS-0001  STATISTICS-0001  PROJECT-0001
```
