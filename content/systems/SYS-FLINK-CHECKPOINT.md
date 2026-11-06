---
id: SYS-FLINK-CHECKPOINT
title: Flink Checkpoint 与状态后端
domain: flink
topic: [checkpoint, state, exactly-once]
difficulty: 3
---

## 一句话

Checkpoint 是给 Flink 作业拍的全局一致性快照，保存算子状态和 source offset，故障后从最近一次快照恢复，不丢已消费数据。

```diagram
type: flow
title: 为什么需要 Checkpoint
direction: LR
nodes:
  - id: job
    label: 流作业运行
    note: 状态在算子内部
    color: blue
  - id: fail
    label: 节点故障
    color: red
  - id: recover
    label: 恢复到最新快照
    note: 不丢不重
    color: green
edges:
  - from: job
    to: fail
    label: 突然挂掉
  - from: fail
    to: recover
    label: 重启 + 恢复
```

## 架构与数据流

JobManager 上的 CheckpointCoordinator 触发检查点，TaskManager 里的算子把 KeyedState、OperatorState、source offset 快照到 StateBackend，再持久化到外部存储。

```diagram
type: flow
title: Checkpoint 架构
direction: LR
nodes:
  - id: jm
    label: JobManager
    note: CheckpointCoordinator
    color: blue
  - id: task
    label: TaskManager 算子
    note: Keyed / Operator / offset
  - id: backend
    label: StateBackend
    note: HashMap / RocksDB
  - id: store
    label: 外部存储
    note: HDFS / S3
    color: green
edges:
  - from: jm
    to: task
    label: 注入 barrier
  - from: task
    to: backend
    label: 状态快照
  - from: backend
    to: store
    label: 持久化
groups:
  - id: runtime
    label: Flink 运行时
    nodes: [jm, task]
  - id: persist
    label: 状态持久化
    nodes: [backend, store]
```

## 运行 SOP

Barrier 随数据流向下游传播，所有并行 subtask 对齐后各自快照，全部完成才算一次成功 Checkpoint；反压会让 barrier 无法对齐。

```diagram
type: seq
title: 一次 Checkpoint 的时序
actors:
  - id: jm
    label: JobManager
  - id: tm
    label: TaskManager
  - id: store
    label: 外部存储
messages:
  - from: jm
    to: tm
    label: 注入 barrier
  - from: tm
    to: store
    label: 异步写快照
  - from: store
    to: tm
    label: 返回状态句柄
  - from: tm
    to: jm
    label: 上报完成
```

## 回答要点与追问

- 一句话讲作用：全局一致性快照，存算子状态 + source offset。
- 二句讲架构：CheckpointCoordinator 触发，算子快照到 StateBackend，落外部存储。
- 三句讲语义：恢复语义（至少一次 / 精确一次），生产用 RocksDB 支持大状态。
- 追问：Checkpoint 和 Savepoint 区别；RocksDB 为什么适合大状态；barrier 对齐超时怎么处理。

## 回答思路

- 开头一句定性：Checkpoint 是全局一致性快照，不是普通日志。
- 中间讲架构：谁触发、快照什么、存哪，三句话串成数据流。
- 结尾讲语义：至少一次 / 精确一次，顺带提 Savepoint 的区别。

## 案例

面经常见问法：「Flink 怎么保证 Exactly-Once」「状态后端有哪些」「barrier 怎么对齐」。回答先落到 Checkpoint，再展开到 sink 端两阶段提交。

## 苏格拉底引导

```socratic
type: socratic
steps:
  - q: 作业跑着突然挂了，内存里的状态会怎样？
    hint: 想想重启后还能不能接着算
    point: 内存状态直接丢，得从 source 重放；所以要把状态定期落到外部存储。
  - q: 快照时算子还在处理数据，怎么保证快照全局一致？
    hint: 想想 barrier 这个标记怎么随数据流传播
    point: 注入 barrier，所有并行 subtask 对齐后再各自快照，得到同一逻辑时刻的一致状态。
  - q: 生产环境状态很大，内存会 OOM，放哪里？
    hint: 内存 + 磁盘混用，谁适合大状态？
    point: StateBackend 用 RocksDB 落盘支持大状态，快照异步上传 HDFS / S3。
```
