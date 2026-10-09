---
id: STORAGE-0374
type: technical
question: HBase的聚合查询性能如何优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用协处理器或离线聚合。

# 参考回答

聚合查询 HBase 本身不擅长，用协处理器 Endpoint 在服务端聚合，或离线算好存结果。避免客户端拉大量数据聚合。

# 追问

- 聚合放哪算？
