---
id: FLINK-0068
type: technical
question: 什么是轻量级检查点（Unaligned Checkpoint）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

不等待对齐，直接快照，减少阻塞。

# 参考回答

Unaligned checkpoint 是检查点不对齐，barrier 到了就快照，没到的数据也一起存进快照，避免等慢流阻塞。适合高吞吐或反压场景，代价是 checkpoint 稍大。

# 追问

- 什么时候用 Unaligned checkpoint？
