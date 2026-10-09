---
id: STORAGE-0042
type: technical
question: 解释一下Hive的权限管理机制。请详细说明权限模型、配置方法、管理策略和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按库表授权，配角色和用户。

# 参考回答

Hive 权限按库表粒度授权，支持角色、用户，可细化到 select、insert 等操作。生产配合 Sentry、Ranger 做统一权限。最小权限原则，定期审计。

# 追问

- 权限怎么和业务结合？
