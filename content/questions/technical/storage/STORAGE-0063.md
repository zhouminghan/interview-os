---
id: STORAGE-0063
type: technical
question: Hive中的外部表和内部表有什么区别？请详细说明它们的特点、使用场景、创建方法和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内部表删表删数据，外部表删表只删元数据。

# 参考回答

内部表数据由 Hive 管，DROP 删数据；外部表数据在外部位置，DROP 只删元数据，数据还在。外部表适合数据要共享或不能删的场景，用 EXTERNAL 关键字建。

# 追问

- 生产为什么常用外部表？
