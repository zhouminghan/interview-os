---
id: STORAGE-0494
type: technical
question: 如何在Clickhouse中创建物化视图？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CREATE MATERIALIZED VIEW 指定目标表。

# 参考回答

物化视图用 CREATE MATERIALIZED VIEW 加 TO 目标表，定义聚合查询。写入源表时触发更新。查询走物化视图结果。

# 追问

- 物化视图怎么刷新？
