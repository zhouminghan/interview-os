---
id: FLINK-0450
type: technical
question: 请详细说明Kafka的安全机制，包括SSL/TLS加密、SASL认证、ACL授权等，以及如何配置和使用这些安全特性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SSL 加密、SASL 认证、ACL 授权三层。

# 参考回答

Kafka 安全分三层：SSL/TLS 加密传输，SASL 做身份认证，ACL 做资源授权。生产开启认证加授权，最小权限原则。

# 追问

- 三层安全各解决什么？
