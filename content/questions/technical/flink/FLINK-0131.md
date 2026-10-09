---
id: FLINK-0131
type: technical
question: Flink与图计算框架的集成方案有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Gelly 或对接外部图库。

# 参考回答

Flink 自带 Gelly 做图计算，也可以把结果导出给 Neo4j 这类图库。图计算不是 Flink 主战场，复杂的用专门图引擎。

# 追问

- Flink 做图计算的局限？
