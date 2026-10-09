---
id: WAREHOUSE-0125
type: technical
question: 请介绍一种你熟悉的数据库技术，包括其特点和应用场景。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

我比较熟 MySQL 的 InnoDB，B+ 树索引加事务 ACID，适合在线业务。

# 参考回答

InnoDB 用 B+ 树组织数据，支持行锁和事务 ACID，适合高并发点查和写。特点是有聚簇索引、二级索引回表、用 MVCC 做一致性读。应用场景就是业务系统的在线库。分析场景它就不太行了，得换列存引擎。

# 追问

- InnoDB 的聚簇索引和非聚簇索引区别？
- MVCC 解决什么问题？
