---
id: STARROCKS-0183
type: technical
question: StarRocks 的增量同步策略有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 CDC 或时间戳增量，按主键 upsert。

# 参考回答

增量同步有 CDC 实时同步和时间戳增量抽取两种。目标是只同步变化的数据，用主键 upsert 更新。CDC 更实时，时间戳更简单。

# 追问

- 时间戳增量有什么坑？
