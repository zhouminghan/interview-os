---
id: STORAGE-0613
type: technical
question: 解释Clickhouse的分布式ID生成策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 UUID 或雪花算法。

# 参考回答

分布式 ID 用 generateUUIDv4 或雪花算法，保证唯一。ClickHouse 本身不管 ID，应用层生成。避免依赖自增。

# 追问

- ID 怎么生成？
