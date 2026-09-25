---
id: LAKEHOUSE-0004
type: technical
question: Iceberg 解决了传统 Hive 的哪些问题，还有哪些没覆盖
topic: [lakehouse, iceberg, hive]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

Iceberg 解决 Hive 的分区演进、schema 演进、ACID/快照、文件级元数据；但不覆盖计算引擎、compaction 治理、并发锁等。

# 30 秒回答

解决：分区演进不重刷、schema 演进、ACID/快照/时间旅行、隐藏分区、文件级元数据避免目录扫描。没覆盖：本身不是计算引擎，compaction 治理、写并发锁、行级更新仍要额外机制。

# 1 分钟回答

- 解决：分区演进、schema 演进、快照隔离、时间旅行、文件级元数据
- 没覆盖：计算引擎（需 Spark/Flink）、小文件/compaction 治理、多写并发锁、性能调优

# 追问

- Hive 分区演进为什么痛苦？
- Iceberg 的 compaction 谁来做？
