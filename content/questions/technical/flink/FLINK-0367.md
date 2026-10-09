---
id: FLINK-0367
type: technical
question: 详细解释FlinkSQL中JOIN语句的状态维护机制及其在故障恢复时的行为。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

JOIN 状态随 checkpoint 快照，恢复时还原。

# 参考回答

JOIN 的两边状态都纳入 checkpoint 快照，故障恢复时从快照还原状态和 offset，继续处理。状态一致性靠 barrier 对齐保证，不丢不重。

# 追问

- 恢复后 JOIN 结果会重复吗？
