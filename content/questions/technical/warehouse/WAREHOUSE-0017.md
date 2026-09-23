---
id: WAREHOUSE-0017
type: technical
question: 上游字段改名、schema 变更、旧版本如何维护降级
topic: [warehouse, schema, governance]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-21-jiukun-data-dev
    company: 九坤
    position: 数据开发（一面）
    date: 2026-09-21
---

# 一句话

schema 变更要向后兼容，靠字段映射、双写和兼容窗口平滑迁移，旧字段延迟下线。

# 30 秒回答

记录字段映射和血缘；加字段用可空，删字段先软删除；新老字段双写，下游平滑迁移后再下线旧字段，支持版本降级。

# 1 分钟回答

- 字段改名：维护字段映射表，下游用视图/别名隔离
- 加字段：可空、向后兼容
- 删字段：先弃用标记，双写兼容期后再删
- 降级：保留旧字段一段时间，新老并行，失败可切回
- 流程：变更评审 -> 兼容设计 -> 双写/灰度 -> 通知下游 -> 下线旧版本 -> 监控

# 追问

- 字段类型变更怎么兼容？
- 怎么通知下游字段变更？
- 兼容窗口一般多长？
