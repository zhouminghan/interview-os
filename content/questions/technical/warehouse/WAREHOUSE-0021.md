---
id: WAREHOUSE-0021
type: technical
question: 星型模型和雪花模型各自适合哪些场景
topic: [warehouse, star-schema, snowflake-schema]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

星型模型以冗余换查询性能，适合报表和 OLAP；雪花模型规范化、省空间，适合维度层级复杂、强调整体一致性。

# 30 秒回答

星型：事实表 + 一层维度表，join 少、查询快，适合报表、分析查询性能敏感场景。雪花：维度表再规范化拆分，冗余少、一致性好，但 join 多，适合维表大、维度层次多的场景。

# 1 分钟回答

- 星型优点：查询简单、join 少、性能好、易理解
- 星型缺点：维度冗余、一致性维护成本高
- 雪花优点：减少冗余、节省存储、一致性更好
- 雪花缺点：join 多、查询复杂、性能差
- 实践：数仓普遍优先星型，雪花用于层次多或维表巨大的场景

# 追问

- 为什么数仓多用星型？
- 雪花模型什么时候比星型更合适？
- 维度冗余会带来什么问题？
