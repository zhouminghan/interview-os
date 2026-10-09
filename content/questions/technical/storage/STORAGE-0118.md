---
id: STORAGE-0118
type: technical
question: 什么是Hive的分区表？请详细说明分区表的设计原则、创建方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按字段分目录，查询只扫相关分区。

# 参考回答

分区表建表 PARTITIONED BY 分区字段，数据按分区存子目录。分区字段选高频过滤的，一般是日期。查询带分区条件走裁剪，大幅减少扫描。

# 追问

- 分区字段怎么选？
