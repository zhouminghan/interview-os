---
id: STARROCKS-0047
type: technical
question: 如何在 StarRocks 中创建和管理用户？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CREATE USER 建用户，GRANT 授权，可改密码、删用户。

# 参考回答

用 CREATE USER 创建用户并设密码，GRANT 给用户或角色授权，REVOKE 回收权限。改密码用 SET PASSWORD 或 ALTER USER，删用户 DROP USER。一般配合角色做权限管理。

# 追问

- GRANT 和 REVOKE 的用法？
