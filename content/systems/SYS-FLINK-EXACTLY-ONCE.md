---
id: SYS-FLINK-EXACTLY-ONCE
title: Kafka-Flink 端到端 Exactly-Once
domain: flink
topic: [exactly-once, kafka, two-phase-commit]
difficulty: 3
---

## 一句话

Flink 靠 Checkpoint + 两阶段提交（2PC）保证 Kafka 到外部 sink 的端到端精确一次。

```diagram
type: flow
title: 端到端链路
direction: LR
nodes:
  - id: src
    label: Kafka Source
    note: offset 进 checkpoint
    color: blue
  - id: op
    label: 算子状态
    note: 计算中间状态
  - id: sink
    label: Sink
    note: 事务提交
    color: green
edges:
  - from: src
    to: op
  - from: op
    to: sink
```

## 架构与数据流

Source 的 offset 和算子状态一起进 Checkpoint；Sink 开启事务，跟着 Checkpoint 一起提交，实现「数据 + 状态」原子落盘。

```diagram
type: flow
title: Checkpoint 与事务
direction: LR
nodes:
  - id: jm
    label: JobManager
    note: 协调 checkpoint
    color: blue
  - id: task
    label: 算子 + Sink
    note: 状态 / 事务
  - id: store
    label: 外部存储
    note: offset + 状态 + 事务日志
    color: green
edges:
  - from: jm
    to: task
    label: 触发 barrier
  - from: task
    to: store
    label: 写入快照 / 事务
```

## 两阶段提交 SOP

```diagram
type: seq
title: 两阶段提交
actors:
  - id: jm
    label: JobManager
  - id: sink
    label: Sink
  - id: kafka
    label: Kafka
messages:
  - from: jm
    to: sink
    label: checkpoint barrier
  - from: sink
    to: kafka
    label: 开启事务写入
  - from: sink
    to: jm
    label: 状态快照完成
  - from: jm
    to: sink
    label: checkpoint 完成
  - from: sink
    to: kafka
    label: 提交事务
```

## 回答思路

先讲 Checkpoint 保证状态精确一次，再讲 sink 端 2PC：barrier 到达开启事务，checkpoint 完成提交事务；失败则回滚，靠 source offset 重放。

## 案例

「为什么会有重复数据」：sink 已写但 checkpoint 失败，重启后从旧 offset 重放，重复写；2PC 让「写数据」和「提交」原子化，避免这种中间态。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 只靠 Checkpoint，能不能保证 sink 端不重复？
    hint: 状态和外部写是两件事
    point: 不能。Checkpoint 保证算子状态精确一次，外部 sink 可能已经写入但没提交，重启会重放。
  - q: 怎么让「写数据」和「checkpoint」原子化？
    hint: 事务什么时候提交
    point: Sink 开启事务，跟着 checkpoint 一起提交；checkpoint 成功才 commit，否则 rollback。
  - q: 故障恢复时，source 从哪开始读？
    hint: offset 存在哪
    point: offset 也进 checkpoint；恢复时从最近一次成功 checkpoint 的 offset 重放，配合 2PC 不丢不重。
```
