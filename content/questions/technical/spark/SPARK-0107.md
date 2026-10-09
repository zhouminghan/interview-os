---
id: SPARK-0107
type: technical
question: 如何对DataFrame进行排序？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

orderBy 或 sort，可多列、指定升降序。

# 参考回答

排序用 orderBy 或 sort，传列和升降序。全局排序会 shuffle，大数据量代价高，尽量加 limit 或用分区内排序。

# 追问

- 全局排序为什么慢？
