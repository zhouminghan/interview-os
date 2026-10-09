---
id: STORAGE-0046
type: technical
question: Hive中的事务支持情况如何？请详细说明事务支持的范围、限制条件、使用方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

新版本支持有限的事务，要求 ORC 和分桶。

# 参考回答

Hive 后来支持 ACID 事务，但要求 ORC 格式和分桶表，且性能一般。主要用于流式写入和 upsert。传统离线场景很少用事务，不推荐大量用。

# 追问

- Hive 事务为什么有限制？
