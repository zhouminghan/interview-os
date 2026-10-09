---
id: FLINK-0120
type: technical
question: 如何降低Flink作业的延迟？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少批处理、调 checkpoint 间隔、用连续模式。

# 参考回答

降低延迟减少数据在算子间的等待，调小 checkpoint 间隔、用连续模式或更快 trigger。延迟和吞吐往往冲突。

# 追问

- 连续模式和微批模式？
