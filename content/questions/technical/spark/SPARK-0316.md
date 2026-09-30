---
id: SPARK-0316
type: technical
question: 小文件问题是读取慢还是运行时慢？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：美团-大数据开发-20260415 Q8

两个环节都有影响，**读取环节更明显**：
- 小文件多 → 每个小文件/小 Split 分配一个 Task → Task 数暴增 → 调度开销、序列化开销远大于实际计算
- NameNode 元数据请求压力大
- 运行时影响：Shuffle 阶段上游产出大量小文件，下游读取 IO 次数多

**处理**：设 `spark.sql.shuffle.partitions` 控制输出文件数，用 `DISTRIBUTE BY` / `REPARTITION` 控制最终输出文件数量。

---
