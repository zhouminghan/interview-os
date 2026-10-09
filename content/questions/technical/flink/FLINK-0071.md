---
id: FLINK-0071
type: technical
question: Flink中的重启策略（Restart Strategies）有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

固定延迟、失败率、无限重启、不重启。

# 参考回答

重启策略有固定延迟重启、失败率重启、无限重启、不重启。生产常用失败率策略，按时间窗口内失败次数重启。要配 checkpoint 才能恢复状态。

# 追问

- 重启策略和 checkpoint 什么关系？
