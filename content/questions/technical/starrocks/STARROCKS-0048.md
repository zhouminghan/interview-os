---
id: STARROCKS-0048
type: technical
question: StarRocks 的 ROLE 权限系统是怎样的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

角色是权限的集合，把角色授予用户统一管理。

# 参考回答

Role 就是把一组权限打包，比如给分析师建一个只读角色，授予若干库的 select，再把角色授予用户。这样人多了也好管，改权限只改角色就行，不用逐个用户改。

# 追问

- 角色之间能继承吗？
