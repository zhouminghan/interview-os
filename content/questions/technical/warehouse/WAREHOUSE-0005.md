---
id: WAREHOUSE-0005
type: technical
question: 什么是星型模型，有什么优缺点
topic: [warehouse, modeling, star-schema]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-18-bytedance-douyin
    company: 字节跳动
    position: 大数据开发（实习）
    date: 2026-09-18
---

# 一句话

星型模型是中间一张事实表、周围一圈维度表直接相连的结构，维表不规范化、允许冗余。

# 30 秒回答

星型模型以事实表为中心，维度表围绕其展开，查询时 join 层数少、结构简单、性能好，是数仓最常用的模型；代价是维度数据冗余，一致性维护成本高。

# 1 分钟回答

- 优点：查询简单、join 少、易理解、性能好、适合 OLAP
- 缺点：维度冗余、存储稍大、更新维度时需同步多处
- 与雪花模型对比：雪花模型把维表进一步规范化，减少冗余但 join 变多、查询变复杂；数仓普遍优先星型

# 追问

- 星型模型和雪花模型怎么选？
- 为什么数仓多用星型而不是雪花？
