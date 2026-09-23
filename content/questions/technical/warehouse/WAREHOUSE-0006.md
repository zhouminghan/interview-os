---
id: WAREHOUSE-0006
type: technical
question: 拉链表是什么，怎么实现
topic: [warehouse, modeling, zip, slowly-changing-dimension]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-18-bytedance-douyin
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-09-18
---

# 一句话

拉链表用 start_date/end_date 加当前标记记录维度状态的历史变化，既有历史又省空间。

# 30 秒回答

每条记录带生效开始时间和结束时间，当前有效记录 end_date 用 9999-12-31 表示；状态变化时关闭旧记录、插入新记录，从而保留完整历史。

# 1 分钟回答

- 核心字段：start_date、end_date、is_current
- 更新：关链（旧记录 end_date 置为变更前一天）+ 开链（插入新记录，start_date 为变更当天，end_date 9999-12-31）
- 作用：解决缓慢变化维度既要历史快照、又不想全量冗余的矛盾
- 查询：当前状态 where end_date = '9999-12-31'；历史状态用日期落在 [start_date, end_date] 区间

# 追问

- 拉链表和 SCD 是什么关系？
- 为什么用 9999-12-31 表示当前有效？
- 拉链表有什么缺点？
