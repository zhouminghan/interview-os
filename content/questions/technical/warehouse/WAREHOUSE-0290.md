---
id: WAREHOUSE-0290
type: technical
question: DWS 层优化留存率计算
difficulty: 0
topic: []
source_type: knowledge
---

预计算留存表（first_login_date, day_offset, retain_count），按天增量更新，避免每次从 DWD 全量扫描。
