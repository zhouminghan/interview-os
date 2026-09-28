---
id: FLINK-0006
type: technical
question: 实时数仓数据缺失，怎么排查和补数
topic: [flink, realtime, backfill]
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

先定位缺失范围和根因，再按 offset 重放或离线回刷补数，保证幂等。

# 30 秒回答

定位缺失范围 -> 排查上游（Kafka offset、消费延迟、任务失败、迟到/乱序、水位线）-> 补数：按 offset 重放或离线回刷 -> 幂等去重 -> 校验。

# 1 分钟回答

- 定位：缺失时间/分区范围
- 根因：offset 回退、消费延迟、任务失败、迟到
- 补数：Kafka 重放、离线回刷、兜底任务
- 保证：幂等、去重、校验

# 追问

- 补数怎么保证不重复？
- 迟到数据怎么处理？
