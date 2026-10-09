---
id: STORAGE-0472
type: technical
question: Clickhouse的权限管理机制是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用户角色权限，库表级授权。

# 参考回答

ClickHouse 权限分用户和角色，按库表授权，支持读写、DDL 等操作权限。配用户密码和访问控制。生产开权限管理。

# 追问

- 权限怎么配？
