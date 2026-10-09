---
id: FLINK-0057
type: technical
question: Flink如何保证状态的一致性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 checkpoint 做一致快照，恢复时回放。

# 参考回答

Flink 靠 checkpoint 对状态做一致性快照，定期把状态和位置存下来，故障后从快照恢复。配合 source 重放和 sink 幂等，能保证状态和结果一致。

# 追问

- 一致性快照怎么做到？
