---
id: STORAGE-0181
type: technical
question: 如何管理Hive的用户权限？请详细说明用户权限的配置方法、管理策略和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按角色授权，最小权限。

# 参考回答

用户权限用角色打包，把角色授给用户。按业务角色划分，比如分析师只读、开发可写。最小权限原则，权限变更走流程。

# 追问

- 权限怎么不失控？
