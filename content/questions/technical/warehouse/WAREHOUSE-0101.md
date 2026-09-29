---
id: WAREHOUSE-0101
type: technical
question: 怎么在数仓层面做埋点漏报、埋点错误的校验
topic: [warehouse, quality]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-04-22-bytedance-warehouse-she-zhao
    company: 字节跳动
    position: 数仓（社招，一面）
    date: 2026-04-22
---

# 一句话

靠多源对账、量级基线、漏斗校验和字段合法性检查，发现埋点漏报和埋点错误。

# 30 秒回答

漏报：和上游/服务端日志对账、看量级环比是否骤降、漏斗各步是否单调递减。错误：字段枚举值校验、空值率、格式校验，关键字段加熔断。配合埋点规范和上线前 review。

# 1 分钟回答

- 漏报：多渠道对账、日环比基线、漏斗完整性（曝光→点击→转化）
- 错误：字段类型/枚举/空值率校验、格式正则
- 机制：核心埋点配 S 级熔断，校验不过卡下游
- 前置：埋点规范 + 上线前 review，从源头减少问题

# 追问

- 埋点漏报和埋点错误哪个更难发现？
- 漏斗校验怎么发现漏报？
