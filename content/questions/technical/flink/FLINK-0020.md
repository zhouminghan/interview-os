---
id: FLINK-0020
type: technical
question: Flink 面试题大纲（200 题覆盖范围）
topic: [flink, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

甜获师兄 Flink 200 题纯题库大纲，覆盖基础架构、高级机制、生产实战三块。

# 30 秒回答

三块：基础概念与架构（流批统一/JobManager/TaskSlot/Watermark/Checkpoint/窗口）、高级篇（SQL/CEP/AsyncIO/2PC/State TTL/背压/HA）、实战篇（实时数仓/双流 Join/维表 Join/倾斜/大状态/CDC）。

# 1 分钟回答

- 基础：流批统一、JobManager/TaskManager、并行度、ProcessFunction、Watermark、Checkpoint/Savepoint、状态后端、窗口/Trigger/Side Output
- 高级：Flink SQL、CEP、Async I/O、两阶段提交、State TTL、Broadcast State、Operator Chain、背压、Flink on YARN/K8s、HA
- 实战：实时数仓、双流 Join、维表 Join（Async/Lookup）、数据倾斜、大状态优化、Checkpoint 调优、Flink CDC、数据湖集成

# 追问

- 大纲里哪些点已经在题库中有带答案的版本？
