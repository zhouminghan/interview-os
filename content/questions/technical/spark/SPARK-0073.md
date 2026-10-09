---
id: SPARK-0073
type: technical
question: Spark的垃圾回收机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 CMS 或 G1，调堆内存和 GC 参数减少停顿。

# 参考回答

Spark 的 GC 影响稳定性，大内存一般用 G1，控制堆大小和 Eden 比例，减少 full GC。对象复用和序列化也能减轻 GC 压力。

# 追问

- full GC 频繁说明什么？
