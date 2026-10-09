---
id: STORAGE-0563
type: technical
question: Clickhouse的ZooKeeper性能优化有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少 ZK 操作，独立部署。

# 参考回答

ZK 优化减少副本同步频率、减少小写入产生的大量 ZK 操作。ZK 独立部署、资源给足。ZK 是副本协调的关键。

# 追问

- ZK 怎么优化？
