---
id: STORAGE-0283
type: technical
question: 解释HBase的HLog（WAL）工作机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

先写日志再写内存，故障重放。

# 参考回答

HLog 是预写日志，写入前先记录，再写 MemStore。故障恢复时重放 HLog，把没落盘的数据恢复。HLog 是数据不丢的保障。

# 追问

- HLog 什么时候清理？
