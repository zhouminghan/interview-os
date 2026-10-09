---
id: STORAGE-0080
type: technical
question: 在Hive中实现数据更新有哪些方法？请详细说明各种更新方式的优缺点和适用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

覆盖重写、ACID 表、拉链表。

# 参考回答

更新方法：INSERT OVERWRITE 整分区重写最简单，ACID 表支持单条 update，拉链表记录变更。数仓多用全量重写或拉链表，单条 update 少用。

# 追问

- 拉链表和 ACID 怎么选？
