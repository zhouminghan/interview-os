---
id: FLINK-0424
type: technical
question: 什么是Kafka的ISR机制？请解释ISR列表的作用，以及当副本同步出现问题时，ISR机制是如何工作的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ISR 是和 leader 保持同步的副本集合。

# 参考回答

ISR 是跟 leader 同步跟得上的副本集合，消息只有写入 ISR 才算提交。副本落后会踢出 ISR，追上来再加回。保证数据不丢和高可用。

# 追问

- 副本踢出 ISR 会怎样？
