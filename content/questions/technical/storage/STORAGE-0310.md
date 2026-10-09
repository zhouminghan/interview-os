---
id: STORAGE-0310
type: technical
question: HBase的安全认证实现原理是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Kerberos 认证加 ACL 授权。

# 参考回答

安全认证用 Kerberos 验证身份，ACL 控制库表权限，配审计日志。客户端和服务端都要认证。生产配合 Ranger 统一管理。

# 追问

- Kerberos 怎么认证？
