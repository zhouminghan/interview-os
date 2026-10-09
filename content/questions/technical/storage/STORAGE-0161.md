---
id: STORAGE-0161
type: technical
question: 如何优化Hive的SequenceFile格式？请详细说明SequenceFile格式的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SequenceFile 是二进制键值格式。

# 参考回答

SequenceFile 是 Hadoop 原生的二进制格式，按键值存，支持压缩。适合中间数据存储。现在分析场景多被列式替代。

# 追问

- SequenceFile 还常用吗？
