---
id: STATISTICS-0001
type: technical
question: t 检验和 z 检验是什么
topic: [statistics, ab-test]
difficulty: 2
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-06-09-meituan-jijing
    company: 美团
    position: 大数据开发（一面）
    date: 2026-06-09
---

# 一句话

两者都是假设检验，判断样本差异是否显著；z 检验用于大样本且总体方差已知，t 检验用于小样本或方差未知。

# 30 秒回答

z 检验要求总体标准差已知、样本量大，用正态分布；t 检验在样本量小（通常 <30）或总体方差未知时用，用 t 分布。数据开发里常出现在 AB 测试、指标显著性判断场景。

# 1 分钟回答

- z 检验：总体方差已知 + 大样本，统计量服从标准正态分布
- t 检验：小样本或方差未知，用样本方差估计，服从 t 分布，自由度越小 t 分布越「胖尾」
- 样本量足够大时 t 分布逼近正态，两者结果趋于一致
- 应用：AB 实验判断实验组/对照组指标差异是否统计显著，常用 p 值 / 置信区间

# 追问

- 单尾检验和双尾检验什么时候用？
- p 值小于 0.05 就代表业务上有效吗？
