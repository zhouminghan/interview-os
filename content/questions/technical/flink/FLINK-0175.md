---
id: FLINK-0175
type: technical
question: Flink的任务调度算法详解。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按 slot 和资源把子任务分配到 TaskManager。

# 参考回答

任务调度把算子拆成子任务，按 slot 资源和本地性分配到 TaskManager，考虑负载均衡。调度由 JobManager 的 Scheduler 完成。

# 追问

- 调度怎么考虑数据本地性？
