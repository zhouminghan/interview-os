---
id: STORAGE-0180
type: technical
question: 什么是Hive的权限管理？请详细说明权限模型、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按库表授权，配角色和用户。

# 参考回答

Hive 权限按库表粒度授权，支持角色、用户，细化到 select、insert。生产配 Ranger 或 Sentry 统一权限。最小权限原则，定期审计。

# 追问

- 权限怎么细化？
