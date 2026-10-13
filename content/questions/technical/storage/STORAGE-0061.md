---
id: STORAGE-0061
type: technical
question: 如何理解Hive的存储位置？请详细说明存储位置的设计原则、配置方法、管理策略和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

> **来源面经**：扬腾创新-数据开发一面-20261013

# 一句话

存储位置在 HDFS，按库表分区组织目录。

# 参考回答

Hive 数据存 HDFS，默认按库、表、分区组织目录。管理上统一目录规范、控制权限、做生命周期。生产一般指定 warehouse 目录，按业务规划路径。

# 追问

- 存储位置怎么规划？
