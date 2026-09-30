---
id: SPARK-0260
type: technical
question: Spark 中哪些操作会触发 Shuffle？
difficulty: 0
topic: []
source_type: knowledge
---

Spark 内部会触发 Shuffle 的一些常见操作如下：
- `repartition`
- `coalesce`
- `groupByKey`
- `reduceByKey`
- `cogroup`
- `join`

---
