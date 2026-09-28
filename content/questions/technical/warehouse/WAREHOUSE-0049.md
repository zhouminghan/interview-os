---
id: WAREHOUSE-0049
type: technical
question: 怎么理解数据血缘关系
topic: [warehouse, lineage]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

血缘是数据从源头到下游的加工流转关系，用于影响分析、根因定位和口径追踪。

# 30 秒回答

血缘记录数据「从哪来、经过哪些任务、流向哪里」，分表级、字段级、任务级；用于影响分析、问题回溯、口径追踪和治理。

# 1 分钟回答

- 表级/字段级/任务级血缘
- 用途：影响分析、根因定位、口径追踪、资产盘点
- 构建：解析 SQL、任务依赖、调度元数据
- 价值：改表/下线前评估影响，出问题快速定位

# 追问

- 字段级血缘怎么构建？
- 血缘在数据治理里怎么用？
