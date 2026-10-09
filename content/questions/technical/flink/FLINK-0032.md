---
id: FLINK-0032
type: technical
question: 解释Flink的分布式执行模型。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

作业转成 DAG，拆算子成子任务分布到 slot 执行。

# 参考回答

Flink 把作业转成执行图，每个算子按并行度拆成子任务，分配到不同 TaskManager 的 slot 里，数据在子任务间流转。这是流水线式执行。

# 追问

- 执行图和作业图有什么区别？
