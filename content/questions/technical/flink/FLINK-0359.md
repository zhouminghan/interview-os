---
id: FLINK-0359
type: technical
question: 解释FlinkSQL与Flink CEP的集成使用方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SQL 用 MATCH_RECOGNIZE 做模式匹配。

# 参考回答

SQL 层用 MATCH_RECOGNIZE 做模式匹配，等价于 CEP 的能力。复杂模式也可以转 DataStream 用 CEP API。SQL 适合声明式规则，DataStream CEP 更灵活。

# 追问

- MATCH_RECOGNIZE 和 CEP 怎么选？
