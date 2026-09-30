---
id: STORAGE-0693
type: technical
question: 设置 hive.mapred.mode = strict 的意义？
difficulty: 0
topic: []
source_type: knowledge
---

它将 MapReduce 作业设置为严格模式，带有分区的表在没有 `WHERE` 子句的情况下无法运行查询。这可以防止非常大的作业长时间运行。

---
