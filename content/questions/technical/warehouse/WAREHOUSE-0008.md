---
id: WAREHOUSE-0008
type: technical
question: 说一说你的数据模型设计，如何把需求转化为数仓语言
topic: [warehouse, modeling, metrics]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 一句话

需求 -> 指标体系 -> 数仓分层/建模，核心是把业务口径翻译成「指标 + 维度 + 粒度 + 周期」。

# 30 秒回答

先和业务对齐口径、维度、粒度、周期和指标定义，拆成原子/派生指标，再按 ODS→DWD→DWS→ADS 分层落地，用维度建模组织事实表和维度表。

# 1 分钟回答

1. 需求澄清：口径、维度、粒度、统计周期、指标公式
2. 指标拆解：原子指标 -> 派生指标 -> 复合指标
3. 分层建模：ODS 贴源 -> DWD 清洗明细 -> DWS 汇总 -> ADS 应用
4. 维度建模：主题域、事实表/维度表、星型模型、缓慢变化维度
5. 落地规范：命名、数据质量、口径文档、元数据与血缘

举例：需求「看各品类近 7 日 GMV」-> 指标 GMV、维度 品类、粒度 品类+日、周期 7 日 -> 落到 DWS。

# 追问

- 原子指标、派生指标、复合指标怎么区分？
- 缓慢变化维度怎么处理？
- 口径不一致怎么治理？
