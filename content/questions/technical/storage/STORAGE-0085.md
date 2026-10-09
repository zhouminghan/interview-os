---
id: STORAGE-0085
type: technical
question: Hive中的ALTER TABLE语句有哪些用法？请详细说明如何修改表结构、添加/删除分区、修改表属性等操作。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

改列、分区、属性和重命名。

# 参考回答

ALTER TABLE 能改列、加删分区、改表属性、重命名表。改列要小心，和已有数据格式要匹配。加删分区最常用，配合生命周期管理。

# 追问

- 改列要注意什么？
