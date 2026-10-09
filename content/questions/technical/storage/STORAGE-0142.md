---
id: STORAGE-0142
type: technical
question: 什么是Hive的JVM调优？请详细说明JVM参数的配置方法、优化策略和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调堆大小和 GC 参数。

# 参考回答

JVM 调优调堆内存大小、GC 算法和新生代比例。堆太小 OOM，太大 GC 停顿长。用 G1 收集器，按任务内存需求配。

# 追问

- GC 参数怎么调？
