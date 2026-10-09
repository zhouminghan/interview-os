---
id: FLINK-0468
type: technical
question: 请详细说明Kafka性能优化的关键点，包括硬件配置、JVM调优、操作系统参数等，以及如何评估优化效果？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

硬件用 SSD，JVM 调堆和 GC，OS 调页缓存。

# 参考回答

性能优化关键点：SSD 磁盘、合理内存给页缓存、JVM 调堆和 GC、操作系统调文件描述符和网络参数。评估靠压测吞吐和延迟。

# 追问

- 页缓存为什么重要？
