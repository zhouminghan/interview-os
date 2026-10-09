---
id: FLINK-0188
type: technical
question: 某广告平台如何使用Flink实现实时竞价？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 做实时出价和效果统计。

# 参考回答

广告平台用 Flink 实时处理竞价请求，做实时出价、频控和效果统计。极低延迟是关键，毫秒级响应。

# 追问

- 实时竞价为什么要求低延迟？
