---
id: FLINK-0010
type: technical
question: 滑动窗口的输出量和计算量怎么估算
topic: [flink, window]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

窗口大小 / 滑动步长 = 数据复用次数；输出频率由滑动步长决定，计算量 ≈ 数据量 × 复用次数。

# 30 秒回答

60 分钟窗口、5 分钟滑动，每条数据落 12 个窗口；每 5 分钟输出一次聚合结果，理论计算量约 100万×12/分钟（可用增量聚合降低）。

# 追问

- 为什么实际计算量比理论小？
- 滑动窗口状态怎么优化？
