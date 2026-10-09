---
id: FLINK-0488
type: technical
question: 请详细说明Kafka集群的安全管理，包括访问控制、加密传输、审计日志等，以及如何实现细粒度的安全控制？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

认证、授权、加密、审计四块。

# 参考回答

安全管理分认证、授权、加密、审计四块，SASL 认证、ACL 授权、SSL 加密、审计日志。细粒度到 topic 和 group 的读写权限。

# 追问

- 安全四块怎么配合？
