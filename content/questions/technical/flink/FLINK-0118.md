---
id: FLINK-0118
type: technical
question: Flink作业中如何避免垃圾回收暂停？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调堆大小、用 G1、减少对象分配。

# 参考回答

避免 GC 暂停用 G1 收集器，合理堆大小，减少对象创建和复用对象。GC 频繁会拖慢吞吐，要监控 GC 指标。

# 追问

- GC 指标怎么看？
