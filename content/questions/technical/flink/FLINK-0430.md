---
id: FLINK-0430
type: technical
question: 什么是Kafka的ACL机制？请说明如何配置和使用ACL来保护Kafka集群的安全？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ACL 做权限控制，按用户授权资源操作。

# 参考回答

Kafka ACL 控制谁对哪个 topic 有读、写、管理权限，配在 ZK 或集群里。生产开启 SASL 认证加 ACL，做最小权限授权。

# 追问

- ACL 和认证什么关系？
