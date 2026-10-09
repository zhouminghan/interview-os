---
id: STARROCKS-0049
type: technical
question: StarRocks 如何支持行级别的权限控制？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

行级权限靠过滤条件或视图实现，原生支持有限。

# 参考回答

StarRocks 原生主要到库表列粒度，行级权限一般通过建视图加过滤条件，或应用层控制。比如只让某用户看某地区的数据，就给他一个带 where 的视图，而不是给整张表权限。

# 追问

- 列级权限和行级权限怎么配合？
