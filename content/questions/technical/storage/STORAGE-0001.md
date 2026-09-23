---
id: STORAGE-0001
type: technical
question: 对存储引擎了解哪些（MySQL / OLAP / ClickHouse / Doris）
topic: [storage, olap, oltp]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

按场景分：OLTP 用行存（MySQL/InnoDB），OLAP 用列存（ClickHouse/Doris），核心区别在存储结构、执行模型和优化目标。

# 30 秒回答

- MySQL/InnoDB：行存、B+ 树、事务 ACID，适合高频点查和事务
- ClickHouse：列存、MergeTree 族、向量化执行，适合海量聚合分析
- Doris：MPP 架构、向量化、三种数据模型，适合实时/离线分析

# 1 分钟回答

- 行存：整行连续存储，适合点查、更新、事务，OLTP
- 列存：按列存储，压缩好、聚合只读相关列，OLAP
- ClickHouse：单机性能强、写入快，适合大宽表聚合
- Doris：兼容 MySQL 协议、分布式 MPP，适合多维分析和实时报表
- 选择：看是事务型还是分析型负载

# 追问

- 行存和列存各自优缺点？
- Doris 的三种数据模型？
- ClickHouse 的 MergeTree 为什么快？
