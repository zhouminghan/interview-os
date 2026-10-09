---
id: FLINK-0279
type: technical
question: FlinkSQL如何保证在故障恢复时的状态一致性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 checkpoint 快照恢复状态。

# 参考回答

故障恢复从 checkpoint 加载状态快照，保证恢复到一致的状态。配合 source offset 重放和 sink 幂等。

# 追问

- 状态一致性的核心机制？
