---
id: STORAGE-0081
type: technical
question: Hive中的DELETE语句如何使用？它和传统数据库的DELETE语句有什么区别？有哪些限制条件？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DELETE 要求 ACID 表，且面向批量。

# 参考回答

Hive 的 DELETE 只对 ACID 表有效，且要求 ORC 和分桶。和传统库不同，Hive delete 是批量操作，性能一般，不面向高频单行删除。离线多靠重写。

# 追问

- Hive delete 为什么有门槛？
