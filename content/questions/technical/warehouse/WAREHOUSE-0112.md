---
id: WAREHOUSE-0112
type: technical
question: 数据仓库和数据库的区别是什么？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据库服务业务交易，数据仓库服务分析决策。

# 参考回答

数据库是业务系统在用的，要求高并发、快读写、事务一致，存的是当下最新状态；数据仓库是给分析用的，数据量大、以读为主、存历史快照。简单记就是：数据库面向「操作」，数据仓库面向「分析」。所以数据库通常行存、强调 ACID，数仓通常列存、做聚合扫描。

# 追问

- 为什么 OLTP 和 OLAP 的存储引擎设计不一样？
- 数据库和数仓在数据量级上的差异？
