---
id: SPARK-0389
type: technical
question: 加盐 Salting 实现
difficulty: 0
topic: []
source_type: knowledge
---

```scala
// 加盐：给倾斜 key 拼接随机后缀
df.withColumn("salted_key", concat(col("key"), lit("_"), (rand() * 10).cast("int")))
  .groupBy("salted_key").agg(...)
  // 去盐：二次聚合
  .groupBy(expr("split(salted_key, '_')[0]")).agg(...)
```

---

