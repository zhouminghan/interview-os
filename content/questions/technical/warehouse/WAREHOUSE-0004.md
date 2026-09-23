---
id: WAREHOUSE-0004
type: technical
question: 事实表和维度表的区别
topic: [warehouse, modeling, fact, dimension]
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

事实表记录业务过程的「事实」，有可度量的数值且会持续增长；维度表描述业务对象的「属性」，相对稳定、数据量小。

# 30 秒回答

事实表：订单金额、商品数量等度量值，通常大且增长快，关联多个维度外键。
维度表：用户、商品、时间、地区等描述信息，用于过滤和分组，相对小且变化慢。

# 1 分钟回答

- 事实表：可加总度量、外键指向维度、通常做分区、数据量大
- 维度表：描述性属性、缓慢变化、数据量小
- 关系：事实表通过维度外键关联维度表，形成星型/雪花模型
- 举例：订单事实表 + 用户/商品/时间维度表

# 追问

- 什么是缓慢变化维度 SCD？
- 什么是退化维度？
- 事实表有哪些分类（事务/周期快照/累积快照）？
