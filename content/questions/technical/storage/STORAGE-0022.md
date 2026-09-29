---
id: STORAGE-0022
type: technical
question: Doris 和 ClickHouse 的区别
topic: [storage, olap]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-03-bytedance-global-data
    company: 字节跳动
    position: 数据开发（一面）
    date: 2025-03-03
---

# 一句话

两者都是 MPP 分析型数据库；ClickHouse 单表极速、适合海量日志明细分析，Doris/StarRocks 更偏多维分析、更新和标准 SQL 生态。

# 30 秒回答

ClickHouse 列存 + 极致单表查询性能，适合日志/明细大宽表；Doris 支持多维分析、更新模型、高并发点查和标准 SQL，更适合报表、实时数仓。选型看是纯分析还是需要更新/并发/生态。

# 1 分钟回答

- ClickHouse：极致单表吞吐、MergeTree 引擎、适合明细大表
- Doris：分区分桶、多种数据模型（明细/聚合/主键）、更新能力强、MySQL 协议易用
- 写入：ClickHouse 高频写入易 too many parts，Doris 导入更平滑
- 选型：日志明细分析选 CH，报表/实时数仓/需要更新选 Doris

# 追问

- ClickHouse 的 too many parts 是什么？
- Doris 和 StarRocks 又是什么关系？
