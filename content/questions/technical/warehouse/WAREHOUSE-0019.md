---
id: WAREHOUSE-0019
type: technical
question: 数据回滚怎么处理
topic: [warehouse, rollback, governance]
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

回滚靠「保留原始数据 + 分区可覆盖 + 备份/快照 + 幂等重跑」，出问题按时间范围回刷。

# 30 秒回答

按时间分区覆盖重跑、备份表/快照回滚、ODS 原始数据重放、拉链表保留历史；流程是定位问题范围 -> 备份 -> 回刷 -> 校验 -> 通知下游。

# 1 分钟回答

- 分区重跑：按时间分区覆盖，回滚到正确口径
- 备份表/快照：切换前备份，失败切回
- 原始数据：ODS 层保留原始，可重放
- 版本：拉链表保留历史版本
- 关键：幂等重跑、校验、下游通知、保留恢复点

# 追问

- 回滚和重跑有什么区别？
- 跨分区回滚怎么做？
- 怎么保证回滚不丢数据？
