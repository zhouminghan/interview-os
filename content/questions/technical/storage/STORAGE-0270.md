---
id: STORAGE-0270
type: technical
question: HBase的安全认证机制有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kerberos 认证加权限授权。

# 参考回答

HBase 安全用 Kerberos 做身份认证，加 ACL 做权限授权，还有审计和加密。生产配 Kerberos，配合 Ranger 做细粒度权限。

# 追问

- 安全怎么配？
