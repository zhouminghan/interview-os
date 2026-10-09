---
id: STORAGE-0045
type: technical
question: 如何理解Hive的存储过程？请详细说明存储过程的概念、特点、使用场景和实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 本身不支持传统存储过程。

# 参考回答

Hive 不支持传统数据库的存储过程，因为它是批处理引擎。可以用脚本、UDF 或调度平台编排多步 SQL 实现类似逻辑。新版本 HPLSQL 能做过程式。

# 追问

- 怎么编排多步 SQL？
