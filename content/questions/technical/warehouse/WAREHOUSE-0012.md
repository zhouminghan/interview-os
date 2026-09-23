---
id: WAREHOUSE-0012
type: technical
question: 维度退化到底在哪一层做，什么场景需要，有什么优势和缺陷
topic: [warehouse, modeling, degenerate-dimension]
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

维度退化是把维度属性冗余进事实表、减少 join；一般在 DWD 事实表做，若在 DWS/ADS 之间选，放 DWS 公共层而不是 ADS。

# 30 秒回答

把高频、稳定的维度属性（如 city_id 对应的 city_name）直接放进事实表，查询时少 join。优先在 DWD 明细层做；DWS/ADS 之间选 DWS，因为公共层可复用，ADS 是应用专用。

# 1 分钟回答

- 做在哪层：优先 DWD 事实表；DWS/ADS 之间选 DWS（公共层）
- 场景：频繁 join 的维度、维度表大、查询性能敏感、维表稳定
- 优势：减少 join、提升查询性能、简化查询
- 缺陷：冗余存储、维度变更要同步、一致性维护成本

# 追问

- 为什么不放 ADS 做退化维度？
- 维表经常变化还适合退化吗？
- 退化维度和缓慢变化维度冲突吗？
