---
id: WAREHOUSE-0102
type: technical
question: uid 和 did 一对多的关系怎么统一身份
topic: [warehouse, identity]
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

一个 uid 对应多设备、一个 did 可能多人共用，靠 ID-Mapping 把 uid/did 映射成统一用户标识，再做去重和置信度。

# 30 秒回答

登录口径以 uid 为准，行为口径先按 did 统计再做 ID-Mapping 归一到用户。用映射表维护 uid↔did，处理一对多/多对一，刷数据用风控规则拦截（同设备多账号、异常频次）。

# 1 分钟回答

- uid vs did：uid 是登录账号，did 是设备，未登录只有 did
- ID-Mapping：登录后把 did 绑定 uid，建立映射表
- 一对多：一个 uid 多台设备，聚合时归一到 uid
- 多对一：一个 did 多人共用，用登录行为/时间切分或降权
- 反作弊：同设备多账号、异常频次做拦截，DAU 口径去重

# 追问

- 未登录用户怎么统一身份？
- DAU 口径下刷数据怎么处理？
