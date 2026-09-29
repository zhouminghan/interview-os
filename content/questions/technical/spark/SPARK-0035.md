---
id: SPARK-0035
type: technical
question: Spark 的 Shuffle 和 MapReduce 的 Shuffle 有什么区别
topic: [spark, shuffle]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

Spark Shuffle 有 HashShuffle 和 SortShuffle，落盘次数少、可复用；MR Shuffle 固定排序落盘多。

# 30 秒回答

Spark SortShuffle 用分区排序 + 索引文件，减少文件数；MR 每个 reducer 一个分区文件，小文件多、排序开销大；Spark 还有动态分区、AQE 优化。

# 追问

- HashShuffle 和 SortShuffle 区别？
- 宽依赖为什么触发 shuffle？
