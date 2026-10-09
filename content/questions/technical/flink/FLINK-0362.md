---
id: FLINK-0362
type: technical
question: 解释FlinkSQL与Gelly图计算框架的集成方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Gelly 在 DataStream 层用，SQL 不太直接集成。

# 参考回答

Gelly 是 DataStream 层的图计算库，SQL 层不太直接集成。图计算逻辑在 DataStream 里用 Gelly 做，结果再转表用 SQL。现在 Gelly 用得少。

# 追问

- 图计算为什么不在 SQL 里做？
