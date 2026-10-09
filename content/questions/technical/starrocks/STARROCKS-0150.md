---
id: STARROCKS-0150
type: technical
question: StarRocks 在公有云上的最佳实践是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

存算分离、对象存储、按需扩缩、跨可用区高可用。

# 参考回答

公有云上一般用存算分离，数据放对象存储便宜，计算按需扩；FE、BE 跨可用区部署保证高可用；再配云监控和自动扩缩。成本和安全都要顾。

# 追问

- 跨可用区部署要注意什么？
