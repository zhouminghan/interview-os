---
id: SPARK-0091
type: technical
question: RDD的并行度如何设置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

通过 repartition、coalesce 或建 RDD 时指定分区数。

# 参考回答

并行度通过分区数控制，可以创建时指定，或用 repartition、coalesce 调整。一般设成 core 数的 2 到 3 倍，repartition 会 shuffle，coalesce 能避免 shuffle 但只能减分区。

# 追问

- repartition 和 coalesce 的区别？
