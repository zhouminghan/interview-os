---
id: FLINK-0340
type: technical
question: 如何设置FlinkSQL作业的资源需求(CPU, Memory)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置 slot 数、核数、堆和托管内存。

# 参考回答

资源需求配置 TaskManager 数量、slot 数、每 slot 的 CPU 和内存，还有堆内存和托管内存。按状态大小和计算量估算，压测调整。

# 追问

- 内存怎么估算？
