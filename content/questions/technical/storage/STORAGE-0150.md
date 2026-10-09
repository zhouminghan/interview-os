---
id: STORAGE-0150
type: technical
question: 什么是Hive的ACID特性？请详细说明ACID特性的实现原理、配置方法和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ACID 是事务特性，Hive 有限支持。

# 参考回答

Hive ACID 靠 delta 文件和 compactor 实现，支持 insert、update、delete。要 ORC 和分桶表。适合需要更新的表，纯批量分析不建议开。

# 追问

- ACID 表有什么限制？
