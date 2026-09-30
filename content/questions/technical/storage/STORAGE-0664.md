---
id: STORAGE-0664
type: technical
question: Hive 建表时 CLUSTERED BY 子句的作用？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 中的 `CLUSTERED BY` 与 `DISTRIBUTE BY` 和 `SORT BY` 相同。当指定 `CLUSTERED BY` 时，它将首先使用哈希将数据分布到不同的 Reducer 中。数据分布后，将对数据进行排序。

必须在表创建期间指定 `CLUSTERED BY` 子句，但这在 Hive 中的数据查询时很有用。

---
