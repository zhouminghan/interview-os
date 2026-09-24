---
id: PROJECT-0011
type: project
question: 介绍你项目的框架
topic: [project, architecture]
difficulty: 2
frequency: high
source_type: ai_generated
needs_personal_input: true
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 回答框架

按「数据链路 -> 分层 -> 技术组件 -> 你负责的部分」讲：

- 数据源：日志、DB binlog、埋点
- 链路：采集 -> 消息 -> 实时/离线计算 -> 存储 -> 应用
- 分层：ODS/DWD/DWS/ADS，实时与离线怎么结合
- 组件：Kafka、Flink、Spark、Doris/ClickHouse 等
- 职责：你负责哪一段、做了哪些设计

# 待补充（真实经历）

> 用你自己的项目架构替换，画清楚数据怎么流转。
