---
id: WAREHOUSE-0020
type: technical
question: 粒度是什么
topic: [warehouse, granularity]
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

粒度是一条记录所代表的最细业务含义，即「按哪些维度、在什么周期」统计。

# 30 秒回答

粒度 = 维度 + 周期，例如「用户 + 商品 + 日」或「品类 + 日」。粒度决定表能回答什么问题、复用范围和数据量。

# 1 分钟回答

- 粒度细：灵活、可上卷，但数据量大
- 粒度粗：聚合快、体积小，但丢失明细
- 建模顺序：先定粒度，再定维度和指标
- 例子：DWS 表粒度是「品类+日」，ADS 可能是「店铺+品类+日」

# 追问

- 粒度和指标是什么关系？
- 粒度选太细会怎样？
- DWD 和 DWS 的粒度各是多少？
