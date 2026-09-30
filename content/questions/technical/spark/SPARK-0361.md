---
id: SPARK-0361
type: technical
question: Spark 中常见的转换（Transformation）有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

- `map(func)`：对源 RDD 每个元素应用函数，返回新 RDD
- `filter(func)`：选择满足条件的元素
- `flatMap(func)`：每个输入可产生 0 到多个输出，将所有输出合并
- `mapPartitions(func)`：在每个分区上迭代应用函数
- `mapPartitionsWithIndex(func)`：同上，但提供分区索引
- `sample(withReplacement, fraction, seed)`：数据采样
- `union(otherDataset)`：合并两个 RDD
- `intersection(otherDataset)`：返回两个 RDD 的交集
- `distinct([numTasks])`：去重
- `groupByKey([numTasks])`：按 Key 分组
- `reduceByKey(func, [numTasks])`：按 Key 聚合
- `sortByKey([ascending, numTasks])`：按 Key 排序
- `join(otherDataset, [numTasks])`：内连接
- `cogroup(otherDataset, [numTasks])`：特殊分组连接
- `coalesce(numPartitions)`：减少分区数
- `repartition(numPartitions)`：随机重新洗牌数据
