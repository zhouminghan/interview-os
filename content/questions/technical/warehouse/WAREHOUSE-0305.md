---
id: WAREHOUSE-0305
type: technical
question: 如果用 DWS 层优化留存率计算，怎么设计？
difficulty: 0
topic: [SHEIN]
source_type: knowledge
---

**思路**：在 DWS 层预计算用户留存表
- 字段：`first_login_date, day_offset, retain_count, new_user_count`
- 按天增量更新：每天只算昨天新增用户的留存
- 避免每次从 DWD 全量扫描
