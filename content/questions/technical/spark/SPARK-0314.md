---
id: SPARK-0314
type: technical
question: Spark 和 MapReduce 的 Shuffle 过程有什么区别？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：京东JDY-二面-20260415 Q16

几个关键区别：

1. **排序行为**：MapReduce 的 Shuffle 强制在 Map 端和 Reduce 端都做排序（Sort），Spark 的 Shuffle 不一定排序，只有 SortMergeJoin 等场景才排序，HashJoin 不需要
2. **中间数据存储**：MapReduce 把 Shuffle 中间数据写到 HDFS（有副本），Spark 写到本地磁盘（无副本），所以 Spark 的 Shuffle IO 开销更小但容错性依赖重算
3. **内存管理**：Spark 可以在内存中做 Shuffle，只有超过阈值才溢写磁盘；MapReduce 更依赖磁盘
4. **合并机制**：MapReduce 有专门的 Combiner 可以在 Map 端做预聚合，Spark 通过 reduceByKey 等算子实现类似效果

---
