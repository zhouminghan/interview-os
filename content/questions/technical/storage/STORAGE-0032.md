---
id: STORAGE-0032
type: technical
question: 什么是Hive的分区？为什么要使用分区？请详细说明分区的概念、设计原则、使用方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区把数据按字段分目录，查询只扫相关分区。

# 参考回答

分区把表数据按分区字段分目录存，查询带分区条件就只扫对应目录，大幅减少扫描。设计上分区字段选高频过滤的，一般是日期。分区别太细，否则小文件多。

# 追问

- 分区太细有什么问题？
