---
id: FLINK-0473
type: technical
question: 在Kafka集群中，如何优化网络传输性能？请详细说明网络参数调优、压缩算法选择等方法，以及如何评估网络性能。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

压缩省带宽，调网络参数。

# 参考回答

网络优化用压缩算法省带宽，调 socket 缓冲、批量参数。评估靠吞吐和网络使用率。带宽是瓶颈就开压缩。

# 追问

- 压缩对 CPU 的影响？
