---
id: FLINK-0443
type: technical
question: 请详细解释Kafka中的消息索引机制，以及索引是如何提高消息查询效率的。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

索引记录 offset 到文件位置，加速查找。

# 参考回答

Kafka 为每个日志段建稀疏索引，记录 offset 到文件物理位置的映射。查消息先二分索引定位，再顺序扫，不用全文件扫，提高查询效率。

# 追问

- 稀疏索引是什么？
