---
id: STORAGE-0089
type: technical
question: Hive中的分区操作有哪些？请详细说明如何创建、删除、修改分区，以及分区相关的查询操作。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ADD、DROP、RENAME 分区，查询带分区条件。

# 参考回答

分区操作有 ADD PARTITION、DROP PARTITION、RENAME 分区。查询带分区字段条件走裁剪。分区管理常用在生命周期，删过期分区。

# 追问

- 删分区影响数据吗？
