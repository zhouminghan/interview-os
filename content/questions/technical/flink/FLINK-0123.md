---
id: FLINK-0123
type: technical
question: 大规模Flink作业的性能调优策略是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分层优化并行度、状态、checkpoint、资源。

# 参考回答

大规模调优是系统性的：并行度合理、状态用 RocksDB 加 TTL、checkpoint 增量、资源配够、监控到位。逐个瓶颈解决。

# 追问

- 大规模作业最先看什么？
