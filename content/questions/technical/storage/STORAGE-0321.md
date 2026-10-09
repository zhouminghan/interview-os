---
id: STORAGE-0321
type: technical
question: 详细描述HBase的权限控制实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ACL 按用户授权库表操作。

# 参考回答

权限控制用 ACL，给用户或组授权库表级的读、写、管理权限。配合 Kerberos 认证。细粒度到列族和 Cell。配 Ranger 统一管理。

# 追问

- 权限粒度到哪？
