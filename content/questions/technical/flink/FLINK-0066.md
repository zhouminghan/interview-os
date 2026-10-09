---
id: FLINK-0066
type: technical
question: 解释Flink的检查点对齐（Checkpoint Alignment）机制。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多流算子等所有输入都到 barrier 再快照。

# 参考回答

检查点对齐是多输入算子要等所有输入的 barrier 都到了，再对状态做快照，保证一致性。代价是快的流要等慢的流，会阻塞。Unaligned checkpoint 就是解决这个。

# 追问

- 对齐为什么会阻塞？
