---
id: STORAGE-0183
type: technical
question: 如何配置Hive的安全策略？请详细说明安全策略的制定方法、配置步骤和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

认证加授权加审计，分层落地。

# 参考回答

安全策略先做认证，再做库表级授权，配审计日志。按数据分级设权限，敏感数据额外管控。定期审计权限。

# 追问

- 敏感数据怎么管控？
