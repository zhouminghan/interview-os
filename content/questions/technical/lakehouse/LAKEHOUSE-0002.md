---
id: LAKEHOUSE-0002
type: technical
question: 介绍一下 Iceberg
topic: [lakehouse, iceberg]
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

Iceberg 是开放表格式，在数据湖上提供 ACID、快照、时间旅行、schema/分区演进。

# 30 秒回答

Iceberg 定义数据文件和元数据的组织方式，提供事务、快照隔离、时间旅行、schema 演进、分区演进，元数据分层管理（metadata -> manifest list -> manifest -> data files）。

# 1 分钟回答

- 能力：ACID、快照、时间旅行、schema/分区演进、隐藏分区
- 元数据：metadata.json、manifest list、manifest、data files
- 优势：避免目录扫描、分区变更不重刷数据
- 多引擎：Spark、Flink、Trino 等共享

# 追问

- Iceberg 和 Hive 表本质区别？
- 分区演进为什么重要？
