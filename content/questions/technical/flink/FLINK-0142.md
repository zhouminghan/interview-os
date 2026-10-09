---
id: FLINK-0142
type: technical
question: 如何使用Flink进行A/B测试分析？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时分流统计，对比实验组指标。

# 参考回答

A/B 测试用 Flink 按实验标识实时分流，分别统计各组的核心指标，实时看效果。配合状态和窗口做实时对比。

# 追问

- A/B 测试指标怎么选？
