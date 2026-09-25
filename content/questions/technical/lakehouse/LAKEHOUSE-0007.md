---
id: LAKEHOUSE-0007
type: technical
question: 湖仓一体平台是什么，做了哪些事
topic: [lakehouse, platform]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-banmu-huadao
    company: 半亩花田
    position: 数据开发（校招）
    date: 2026-09-25
---

# 一句话

湖仓一体平台把数据湖存储和数仓计算/治理能力合到一套平台。

# 30 秒回答

底层对象存储 + 开放表格式（Iceberg/Hudi），上层提供 SQL 引擎、元数据、事务、调度和治理，一份数据多引擎使用，兼顾灵活性和数仓能力。

# 1 分钟回答

- 存储：对象存储 + 开放表格式
- 计算：Spark/Flink/Presto/StarRocks 等
- 平台：开发、调度、元数据、血缘、权限一体化
- 收益：降低搬迁、批流一体、降本

# 追问

- 湖仓一体和纯数据湖区别？
- 平台里开发怎么和调度打通？
