---
id: STORAGE-0415
type: technical
question: 在生产环境中如何实现HBase的权限控制？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ACL 加 Ranger 统一授权。

# 参考回答

权限控制用 ACL 做库表级授权，配 Ranger 统一管理。按角色授权，最小权限。配合 Kerberos 认证。定期审计权限。

# 追问

- 权限怎么统一管？
