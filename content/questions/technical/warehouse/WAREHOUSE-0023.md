---
id: WAREHOUSE-0023
type: technical
question: 数仓的表符合三范式吗
topic: [warehouse, normalization, modeling]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

数仓表通常不符合三范式，而是反范式化、维度建模，故意冗余换查询性能。

# 30 秒回答

三范式面向 OLTP（写多、一致性），数仓面向 OLAP（读多、大表 join）。数仓的 DWS/ADS 宽表和维度模型普遍反范式、冗余，以减少 join、提升查询性能。

# 1 分钟回答

- ODS/DWD：接近原始或规范化
- DWS/ADS：反范式、宽表冗余，面向查询
- 原因：范式化会导致大量 join，分析性能差
- 结论：范式用于 OLTP，数仓以维度建模/反范式为主，以空间换性能

# 追问

- 维度建模和范式化是对立的吗？
- 数仓里还有哪些地方会反范式？
