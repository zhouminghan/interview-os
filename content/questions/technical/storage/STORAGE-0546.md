---
id: STORAGE-0546
type: technical
question: 如何优化Clickhouse的分布式查询？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分片均匀，减少跨节点聚合。

# 参考回答

分布式查询优化分片键均匀、减少分片间数据传输、用本地表查询避免二次分发。分片数合理，负载均衡。

# 追问

- 分布式查询怎么优化？
