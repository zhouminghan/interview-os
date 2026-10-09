---
id: STARROCKS-0197
type: technical
question: StarRocks 在金融领域的最佳实践是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

风控、对账、报表，强调一致性和权限。

# 参考回答

金融场景用 StarRocks 做风控指标、实时对账、监管报表。金融对数据一致性和权限要求高，所以主键模型、权限审计、高可用都要配到位。

# 追问

- 金融为什么特别看重一致性？
