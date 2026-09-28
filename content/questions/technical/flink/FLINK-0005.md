---
id: FLINK-0005
type: technical
question: 要搭建一套实时数仓，怎么设计架构
topic: [flink, realtime-warehouse]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

实时数仓用「数据源 -> Kafka -> Flink 计算 -> 实时存储 -> 应用」链路，分 ODS/DWD/DWS/ADS 层。

# 30 秒回答

数据源经 Kafka 接入，Flink 实时计算，落 Doris/ClickHouse/HBase/Kafka；分层 ODS（消息）-> DWD（明细）-> DWS（汇总）-> ADS；离线层兜底融合。

# 1 分钟回答

- 采集：Canal/Kafka 实时接入
- 计算：Flink 实时处理、状态、迟到处理
- 存储：Doris/ClickHouse/Kafka
- 分层：ODS/DWD/DWS/ADS
- 架构：Lambda 或 Kappa，实时 + 离线兜底

# 追问

- Lambda 和 Kappa 怎么选？
- 实时数仓的状态怎么管？
