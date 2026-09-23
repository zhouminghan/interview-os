---
id: STORAGE-0005
type: technical
question: Doris 频繁写入导致查询延迟高，晚上停写恢复，原因是什么
topic: [storage, doris, compaction]
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

频繁小批量写入会产生大量版本/小文件，compaction 跟不上，查询要合并很多版本，延迟升高。

# 30 秒回答

写入过频导致 version 和文件碎片堆积，compaction 追不上，查询时合并成本高、延迟大。晚上停写后 compaction 消化完，查询恢复。改成每分钟一批会明显改善，但不一定立刻变快。

# 1 分钟回答

- 原因：高频小批写入 -> 大量 version + compaction 积压 + 写入与 compaction 争抢 CPU/IO
- 追问：改成每分钟一批，查询会变快，但不一定「立刻」，需要等历史积压的 compaction 消化
- 说明：瓶颈是写入频率太高，不是单次写入量

# 追问

- 怎么判断是 compaction 的问题？
- Doris 怎么减少写入频率、加大攒批？
- compaction 可以调哪些参数？
