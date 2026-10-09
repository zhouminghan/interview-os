---
id: STORAGE-0088
type: technical
question: 在Hive中实现表结构修改有哪些方法？请详细说明如何添加/删除/修改列、修改列类型等操作。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 ALTER TABLE 的 ADD、CHANGE、REPLACE 改列。

# 参考回答

加列用 ADD COLUMNS，改列名类型用 CHANGE，整体替换用 REPLACE COLUMNS。改列只改元数据，要保证和已有数据兼容，否则查询出错。

# 追问

- 改列类型有什么风险？
