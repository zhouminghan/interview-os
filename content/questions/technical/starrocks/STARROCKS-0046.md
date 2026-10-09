---
id: STARROCKS-0046
type: technical
question: StarRocks 的用户权限管理是怎样的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按用户、角色、库表、操作粒度授权。

# 参考回答

StarRocks 权限分用户、角色两层，权限可以到库、表甚至列粒度，操作权限分 select、insert、alter 等。用 role 把权限打包，再把 role 授予用户，管理更清晰。

# 追问

- 用户和角色有什么区别？
