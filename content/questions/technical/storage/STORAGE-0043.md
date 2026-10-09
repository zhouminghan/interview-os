---
id: STORAGE-0043
type: technical
question: 什么是Hive的元数据？它包含哪些信息？请详细说明元数据的类型、存储方式、管理方法和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据描述表结构、分区、存储位置。

# 参考回答

元数据存表名、字段、类型、分区、存储位置、格式这些。存在 Metastore 的关系库里。管理上做备份、权限、一致性校验，血缘和资产管理也靠它。

# 追问

- 元数据不一致怎么办？
