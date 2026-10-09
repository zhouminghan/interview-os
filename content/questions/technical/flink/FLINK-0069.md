---
id: FLINK-0069
type: technical
question: 如何配置检查点的时间间隔和超时？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

设 checkpoint 间隔和超时参数。

# 参考回答

配置 checkpoint 的间隔时间、超时时间、并发数这些参数。间隔按业务可容忍的数据丢失窗口设，超时要够快照完成。间隔太短频繁快照有开销，太长恢复丢得多。

# 追问

- 间隔设多少合适？
