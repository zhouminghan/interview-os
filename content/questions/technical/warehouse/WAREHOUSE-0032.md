---
id: WAREHOUSE-0032
type: technical
question: 你们建模的过程是怎样的
topic: [warehouse, modeling, process]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-shopee-data-dev
    company: 虾皮
    position: 数据开发（二面）
    date: 2026-09-24
---

# 一句话

建模从需求澄清和口径定义开始，再定主题域、粒度、分层，最后维度建模并评审上线。

# 30 秒回答

需求澄清 -> 指标拆解 -> 定主题域和粒度 -> 分层设计 -> 维度建模（事实/维度/星型）-> 命名规范 -> 评审 -> 开发 -> 对账 -> 上线。

# 1 分钟回答

- 需求澄清：口径、维度、粒度、周期
- 指标拆解：原子/派生/复合指标
- 建模：事实表、维度表、星型模型
- 评审：口径和复用性评审，避免重复
- 上线：对账、监控

# 追问

- 建模时先定粒度还是先定指标？
- 评审主要看什么？
