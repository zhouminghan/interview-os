---
id: STORAGE-0235
type: technical
question: HBase中的WAL(Write Ahead Log)是什么？它的作用是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

WAL 先记日志再写内存，保证不丢。

# 参考回答

WAL 是预写日志，数据写入前先记日志，再写内存。故障恢复时重放 WAL，防止内存数据丢失。是 HBase 可靠性的保障。

# 追问

- WAL 怎么保证不丢数据？
