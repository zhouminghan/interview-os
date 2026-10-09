---
id: STORAGE-0512
type: technical
question: 解释Clickhouse的物化视图刷新机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

写入源表时触发更新。

# 参考回答

ClickHouse 物化视图在源表写入时同步触发计算，把结果写到目标表。是增量的，不是全量刷新。查询读目标表结果。

# 追问

- 物化视图是同步还是异步？
