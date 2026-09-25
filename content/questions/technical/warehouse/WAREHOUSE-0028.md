---
id: WAREHOUSE-0028
type: technical
question: 为什么选 X% 这个偏差阈值，逻辑是什么
topic: [warehouse, metrics, threshold]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

阈值是「业务可接受误差 + 数据自然波动 + 风险容忍」的平衡。

# 30 秒回答

阈值太严误报多、太松漏报多。按指标重要性分级设阈值：核心指标更严（如 1%-2%），一般指标放宽；结合业务可接受误差和历史波动定。

# 1 分钟回答

- 业务可接受误差：多少偏差影响决策
- 数据自然波动：口径差异、延迟、抽样误差
- 风险容忍：核心指标严格，边缘指标放宽
- 分级：核心 vs 一般指标不同阈值

# 追问

- 阈值怎么动态调整？
- 不同指标阈值怎么分级？
