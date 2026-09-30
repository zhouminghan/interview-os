---
id: STORAGE-0635
type: technical
question: Hive 支持哪些复杂/集合数据类型？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 支持以下复杂/集合数据类型：

- **Map**：这是键值对的集合。可以通过指定 `[key]` 来获取集合中键对应的值。
- **Array**：这是集合中值的有序序列，基于索引。可以通过索引（如 `[i]`，其中 i 是元素的位置）访问它。
- **Struct**：这是一种记录类型，内部有其他命名字段。类似于 C 中的 struct 或 Java 中的 object。
- **Uniontype**：这类似于 C 中的 Union。由于对此数据类型的支持尚不完全，不应使用它。

---
