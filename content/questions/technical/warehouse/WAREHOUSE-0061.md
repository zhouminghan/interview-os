---
id: WAREHOUSE-0061
type: technical
question: 数仓的数据安全与权限如何设计
topic: [warehouse, security]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

数仓安全靠数据分级 + 库/表/行/列权限 + 脱敏 + 审计。

# 30 秒回答

数据分级分类（L1-L4），权限做到库级/表级/行级/列级，敏感字段脱敏，操作留审计日志，满足合规和最小权限原则。

# 1 分钟回答

- 分级分类：按敏感程度定级
- 权限：库/表/行/列粒度，最小权限
- 脱敏：手机号、身份证、金额等
- 审计：查询、下载、导出留痕
- 合规：数据安全法、跨境等要求

# 追问

- 行级权限怎么实现？
- 脱敏和权限的区别？
