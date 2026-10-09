---
id: FLINK-0113
type: technical
question: Flink的网络配置参数有哪些？如何调优？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调网络缓冲、背压相关参数。

# 参考回答

网络参数主要是网络缓冲大小、数量，影响吞吐和反压。高吞吐场景调大缓冲，但要控制内存。默认参数一般够，别乱调。

# 追问

- 网络缓冲调大有什么代价？
