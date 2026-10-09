---
id: STORAGE-0079
type: technical
question: 什么是Hive的EXPORT和IMPORT？它们的主要用途是什么？请详细说明其使用方法和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

EXPORT 导出表数据和元数据，IMPORT 导入。

# 参考回答

EXPORT 把表的数据和元数据一起导出到 HDFS，IMPORT 再导入，用于跨集群迁移和备份。注意迁移时路径和权限，适合整表迁移场景。

# 追问

- EXPORT 和普通导出区别？
