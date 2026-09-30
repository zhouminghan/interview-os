---
id: SPARK-0346
type: technical
question: Spark 分区器有哪些？各自适用场景？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-数据开发实习一面-20260310 Q16
> **要点提纲**：HashPartitioner | RangePartitioner | 自定义 Partitioner | 倾斜处理

Spark 内置两种分区器：

**1. HashPartitioner（默认）**
- 算法：`key.hashCode() % numPartitions`
- 适用：大部分 Shuffle 场景（groupByKey、reduceByKey、join 等默认用这个）
- 优点：实现简单、分发快
- 缺点：key 分布不均时会倾斜（同 hashCode 的 key 全到同一个分区）

**2. RangePartitioner**
- 算法：先对 key 采样（水塘采样），确定分区边界，保证每个分区的 key 范围大致均匀
- 适用：sortByKey、sortBy 等需要全局有序的操作
- 优点：排序后数据分布均匀
- 缺点：需要先采样一轮，有额外开销

**3. 自定义 Partitioner**
- 继承 `org.apache.spark.Partitioner`，重写 `numPartitions` 和 `getPartition(key)`
- 适用场景：数据倾斜时把热点 key 单独分区、或者按业务逻辑自定义分发规则

> 💡 **专家补充**：Spark SQL 层面用户一般不直接指定 Partitioner，而是通过 `spark.sql.shuffle.partitions` 控制分区数 + AQE 动态合并小分区。RDD API 才需要显式选分区器

---
