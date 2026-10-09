---
id: FLINK-0464
type: technical
question: 请详细解释Kafka的权限控制机制，包括用户认证、资源授权等过程，以及如何实现细粒度的权限控制。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SASL 认证加 ACL 授权。

# 参考回答

权限控制靠 SASL 认证确认身份，ACL 授权到 topic、group 级别的读写权限。可细化到具体操作，做最小权限授权。

# 追问

- 细粒度到什么程度？
