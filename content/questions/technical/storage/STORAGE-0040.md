---
id: STORAGE-0040
type: technical
question: 什么是Hive的动态分区？如何配置？请详细说明动态分区的工作原理、配置方法、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

动态分区按数据自动创建分区。

# 参考回答

动态分区插入时根据数据的分区字段值自动建分区，不用手动指定。配置开启 dynamic partition，注意限制分区数，防止分区爆炸和小文件。

# 追问

- 动态分区有什么坑？
