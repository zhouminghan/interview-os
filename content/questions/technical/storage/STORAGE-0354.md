---
id: STORAGE-0354
type: technical
question: 如何优化HBase的元数据性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 Region 数，控制 Meta 表大小。

# 参考回答

元数据性能优化减少 Region 数量，别让 Meta 表太大。客户端缓存 Region 位置减少 Meta 访问。Region 太多元数据开销大。

# 追问

- Region 多有什么问题？
