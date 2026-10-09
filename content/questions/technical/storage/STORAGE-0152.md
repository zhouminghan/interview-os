---
id: STORAGE-0152
type: technical
question: 什么是Hive的动态分区？请详细说明动态分区的工作原理、配置方法和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按数据自动建分区。

# 参考回答

动态分区插入时按数据的分区字段值自动建分区。配置开启 dynamic partition，限制分区数防止爆炸。适合数据分区值多、手动指定麻烦的场景。

# 追问

- 动态分区有什么坑？
