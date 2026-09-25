---
id: LAKEHOUSE-0003
type: technical
question: Iceberg 的组成、元数据结构了解多少
topic: [lakehouse, iceberg, metadata]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

Iceberg 元数据分层：metadata.json -> manifest list -> manifest file -> data files，外加 snapshot 和 catalog。

# 30 秒回答

数据文件之上是 manifest（记录文件级元数据），manifest 之上是 manifest list，最上层 metadata.json 记录表 schema、分区、快照；catalog 指向当前 metadata.json。

# 1 分钟回答

- data files：实际数据文件
- manifest file：文件级元数据、统计信息
- manifest list：一组 manifest 的索引
- metadata.json：schema、分区、快照列表、当前快照
- snapshot：某一时刻的表状态
- catalog：定位当前 metadata.json

# 追问

- 为什么要分层元数据？
- snapshot 怎么支持时间旅行？
