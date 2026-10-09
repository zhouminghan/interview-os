---
id: STORAGE-0047
type: technical
question: 什么是Hive的ACID特性？请详细说明ACID特性的实现原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ACID 是事务特性，Hive 有限支持。

# 参考回答

Hive ACID 靠 delta 文件和 compactor 实现事务，支持 insert、update、delete。要 ORC 格式和分桶表。性能有开销，适合需要更新的表，不适合纯批量分析。

# 追问

- ACID 表的代价是什么？
