---
id: STORAGE-0334
type: technical
question: 详细解释HBase的JVM调优方案。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调堆、GC、堆外内存。

# 参考回答

JVM 调优用 G1 收集器、合理堆大小、堆外给 BucketCache。避免 full GC 停顿。堆大小按内存和缓存需求配。

# 追问

- full GC 频繁怎么办？
