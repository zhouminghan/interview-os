---
id: FLINK-0116
type: technical
question: 状态访问和更新的性能优化方法有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少状态访问次数、用 RocksDB 调优。

# 参考回答

状态优化减少访问次数，能一次读完就一次读完，RocksDB 调优块缓存和写缓冲。状态太大要分 key 或用 TTL。

# 追问

- 状态访问频繁会怎样？
