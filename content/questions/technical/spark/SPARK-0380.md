---
id: SPARK-0380
type: technical
question: Spark 中哪些操作会触发 Shuffle？
difficulty: 0
topic: []
source_type: knowledge
---

- `repartition`：增加或减少分区
- `join`：连接两个 RDD
- `cogroup`：将多个 RDD 按 Key 分组
- `groupByKey`：按 Key 分组
- `reduceByKey`：按 Key 聚合
