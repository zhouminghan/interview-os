---
id: WAREHOUSE-0013
type: technical
question: 重复计算如何发现，如何推动治理下线/合并
topic: [warehouse, governance, duplicate]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-pdd-data-dev
    company: 拼多多
    position: 数据开发（社招）
    date: 2026-09-21
---

# 一句话

重复计算靠血缘、指标字典和审计发现，治理要「盘点 -> 统一口径 -> 合并/下线 -> 通知下游 -> 监控」。

# 30 秒回答

发现：血缘分析、指标字典对比、审计日志、同指标多任务扫描。治理：资产盘点、识别重复、统一口径、合并任务、下线冗余、灰度切换、持续监控。

# 1 分钟回答

- 典型问题：同一指标多团队各算一套、同一表被重复加工、口径不一致
- 发现：血缘 + 指标字典 + 任务审计 + 字段血缘比对
- 治理流程：
  1. 盘点资产，识别重复
  2. 对齐口径，选定权威来源
  3. 合并/下线冗余任务
  4. 下游切换、灰度、保留兼容期
  5. 下线后验证 + 持续监控

# 追问

- 怎么判定两个任务是重复计算？
- 下游不同意下线怎么办？
- 灰度切换怎么做才安全？
