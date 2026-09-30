---
id: FLINK-0580
type: technical
question: 实时和离线数据不一致怎么排查？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-大数据开发-20260414（引申自实时数仓项目）

逐层对比：实时 DWD vs 离线 DWD 条数 → 实时 ADS vs 离线 ADS 指标值。

常见差异原因：延迟到达（23:59 日志 00:01 才到 Kafka）、去重逻辑差异（State 近似 vs COUNT DISTINCT 精确）、极端情况数据丢失。容忍标准：核心指标差异 <1%。

---
