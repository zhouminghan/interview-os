---
id: STATISTICS-0002
type: technical
question: 二项分布、置信区间、样本量估算怎么理解？
topic: [statistics, probability]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-27-google-ai-de
    company: Google
    position: ML Data Engineer（硕 3 年社招，L4）
    date: 2026-09-27
---

# 一句话

二项分布描述 n 次独立实验里成功次数的分布，置信区间给估计值一个波动范围，样本量按期望误差和置信度反推需要多少样本。

# 30 秒回答

二项分布：n 次独立伯努利实验，成功概率 p，成功次数服从 B(n,p)，均值 np、方差 np(1-p)。置信区间：估计值 ± 边际误差，比例类用正态近似 p̂ ± z·sqrt(p̂(1-p̂)/n)。样本量：先定置信度和允许误差，再反推 n = z²p(1-p)/E²，精度要求越高、样本越大。

# 1 分钟回答

- 二项分布：B(n,p)，均值 np、方差 np(1-p)，np 和 n(1-p) 足够大时可正态近似
- 置信区间：点估计 ± 边际误差，95% 对应 z≈1.96
- 样本量公式：n = z²p(1-p)/E²，p 未知时取 0.5 最保守
- 应用：AB 测试最小样本量、指标置信区间、抽样误差估计
- 边界：样本小或 p 极端时正态近似失效，要换精确方法

# 追问

- 为什么 p=0.5 时样本量最大？
- 置信度 95% 和 99% 样本量差多少？
