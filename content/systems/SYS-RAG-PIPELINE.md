---
id: SYS-RAG-PIPELINE
title: RAG 检索增强生成
domain: llm
topic: [rag, embedding, retrieval]
difficulty: 3
---

## 一句话

RAG 是把外部知识检索出来拼进 prompt 再生成，解决大模型知识过期和幻觉。

```diagram
type: flow
title: RAG 两阶段
direction: LR
nodes:
  - id: q
    label: 用户问题
    color: blue
  - id: ret
    label: 检索相关文档
  - id: llm
    label: LLM 生成
    color: green
edges:
  - from: q
    to: ret
  - from: ret
    to: llm
    label: 拼进 prompt
```

## 索引链路

离线阶段把文档切块、向量化后写入向量库，同时保留标题、来源等元数据。

```diagram
type: flow
title: 离线索引
direction: LR
nodes:
  - id: chunk
    label: 文档切块
    color: blue
  - id: embed
    label: Embedding
  - id: vec
    label: 向量库
  - id: meta
    label: 元数据
    note: 标题 / 来源
    shape: note
edges:
  - from: chunk
    to: embed
  - from: embed
    to: vec
  - from: chunk
    to: meta
    dashed: true
```

## 查询链路与数据流

```diagram
type: seq
title: 在线查询
actors:
  - id: user
    label: 用户
  - id: app
    label: 应用
  - id: vec
    label: 向量库
  - id: llm
    label: LLM
messages:
  - from: user
    to: app
    label: 问题
  - from: app
    to: vec
    label: 向量检索 top-k
  - from: vec
    to: app
    label: 相关片段
  - from: app
    to: llm
    label: prompt + 片段
  - from: llm
    to: app
    label: 生成答案
  - from: app
    to: user
    label: 返回
```

## 回答要点与追问

- 要点：两阶段（离线建库 / 在线检索生成），强调「检索相关片段 + 注入 prompt」，对比传统搜索只返回文档列表。
- 追问：和微调区别；如何评测 RAG；chunk 大小怎么定。

## 回答思路

两阶段讲：离线建库（切块 → 向量化 → 入库），在线检索生成（检索 top-k → 拼 prompt → 生成）。强调 RAG 解决「知识过期 + 幻觉」，对比传统搜索只返回文档列表。

## 案例

「文档怎么接进 Agent」「RAG 和微调怎么选」：先讲清 RAG 链路，再给选择依据——知识频繁更新、要可溯源就 RAG；风格格式固定、数据私有就微调。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 为什么不能把整本书直接塞进 prompt？
    hint: 想想上下文窗口和成本
    point: 上下文窗口有限、成本高、噪声大；只把最相关的片段放进 prompt。
  - q: 怎么从一堆文档里找到最相关的片段？
    hint: 文本怎么变成能比大小的向量
    point: 把问题向量化，到向量库做相似度检索，取 top-k 片段。
  - q: 检索到的片段怎么变成最终答案？
    hint: 片段和问题一起交给谁
    point: 把问题 + top-k 片段拼成 prompt 交给 LLM，让它基于材料生成答案。
```
