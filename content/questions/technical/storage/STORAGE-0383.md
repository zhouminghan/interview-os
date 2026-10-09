---
id: STORAGE-0383
type: technical
question: 分享一个HBase的安全实践案例。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

认证加授权加审计落地。

# 参考回答

安全实践用 Kerberos 认证，Ranger 做库表级授权，开审计日志。敏感数据加密。按最小权限分配，定期审计权限。

# 追问

- 安全怎么落地？
