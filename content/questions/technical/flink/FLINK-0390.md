---
id: FLINK-0390
type: technical
question: 解释一个实际案例：如何优化FlinkSQL Checkpoint性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

增量 checkpoint、合理间隔、减少状态。

# 参考回答

checkpoint 优化用增量 checkpoint、合理设置间隔、减少状态大小、本地恢复。间隔太短频繁快照有开销，太长恢复丢得多。

# 追问

- checkpoint 间隔怎么定？
