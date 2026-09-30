---
id: STORAGE-0645
type: technical
question: Hive 中 SORT BY 和 ORDER BY 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

在 Hive 中，使用 `SORT BY` 对每个 Reducer 中的数据进行排序。可以在 `SORT BY` 子句中使用多个 Reducer。

使用 `ORDER BY` 对所有通过一个 Reducer 的数据进行排序。因此 `ORDER BY` 选项只能与一个 Reducer 一起使用。

`ORDER BY` 保证输出中的总顺序，`SORT BY` 仅保证一个 Reducer 内数据的顺序。

---
