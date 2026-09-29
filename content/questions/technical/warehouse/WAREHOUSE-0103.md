---
id: WAREHOUSE-0103
type: technical
question: DWD 和 DWS 怎么区分
topic: [warehouse, dwd, dws]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-07-14-huolala-senior-bigdata
    company: 货拉拉
    position: 高级大数据开发（一面）
    date: 2026-07-14
---

# 一句话

DWD 保留原子粒度、只做清洗不做聚合；DWS 做轻度汇总并冗余关联维度，服务下游取数。

# 30 秒回答

DWD 是明细事实层：ODS 经 ETL 清洗，一行代表一条业务行为，量级大的维度不做关联；DWS 把 DWD 轻度聚合，并关联频道/用户等维度冗余成宽表，下游不用再 join。一句话：DWD 保原子、DWS 做汇总 + 维度冗余。

# 1 分钟回答

- DWD：清洗 + 规范化 + 去重，保留事务型事实表粒度
- 维度退化：只有量级小的维度（枚举翻译、订单详情）才在 DWD 退化
- DWS：轻度聚合 + 关联维度，冗余成宽表
- 取舍：DWS 冗余维度有存储浪费，但下游取数快、口径统一
- 大维度（用户画像等）不在 DWD 关联，避免明细表过重

# 追问

- 什么维度适合在 DWD 退化？
- DWS 冗余维度的代价是什么？
