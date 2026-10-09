---
id: SPARK-0215
type: technical
question: 如何优化Spark的GC问题？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 G1、调堆大小和 Eden、减少对象。

# 参考回答

GC 优化用 G1 收集器，调堆大小和年轻代比例，减少频繁 full GC。对象复用、序列化也能减轻 GC 压力。

# 追问

- full GC 频繁怎么排查？
