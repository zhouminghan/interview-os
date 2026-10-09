---
id: FLINK-0152
type: technical
question: Flink作业中的资源泄漏如何排查？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看连接、线程、内存是否释放。

# 参考回答

资源泄漏排查连接是否关闭、线程是否堆积、内存是否只增不减。外部连接用连接池并正确关闭，监控 JVM 指标找泄漏。

# 追问

- 内存只增不减怎么排查？
