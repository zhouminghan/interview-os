---
id: WAREHOUSE-0018
type: technical
question: 湖仓一体和纯数仓的区别是什么
topic: [warehouse, lakehouse]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

纯数仓把数据 ETL 进仓、面向分析；湖仓一体在数据湖上叠加事务、元数据、索引和 SQL 能力，让一份数据既存又算。

# 30 秒回答

纯数仓：结构化、ETL 入仓、数仓分层，分析为主，原始/非结构化数据难直接查。湖仓一体：湖上增加事务（Iceberg/Hudi/Delta）、元数据和查询引擎，减少搬迁，支持多种负载和开放格式。

# 1 分钟回答

- 纯数仓：数据先进仓再分析，链路长、成本高、灵活性差
- 湖仓一体：一套存储 + 事务 + 元数据 + 多引擎（Presto/Spark），批流统一
- 关键组件：Iceberg/Hudi/Delta、Parquet/ORC 开放格式
- 优势：一份数据多引擎、降本、批流一体、支持半结构化
- 代价：体系复杂、治理和一致性要求高

# 追问

- 湖仓一体的典型架构有哪些？
- Iceberg/Hudi/Delta 有什么区别？
- 什么时候还选纯数仓？
