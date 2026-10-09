---
id: SPARK-0203
type: technical
question: 如何优化Spark的join操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表 broadcast、大表分桶、避免笛卡尔积。

# 参考回答

join 优化优先小表 broadcast，大表考虑分桶对齐或 sort merge，避免笛卡尔积。统计信息准能让优化器选对策略。

# 追问

- broadcast join 的限制？
