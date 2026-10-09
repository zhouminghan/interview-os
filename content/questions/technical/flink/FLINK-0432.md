---
id: FLINK-0432
type: technical
question: Kafka的消费者提交偏移量的方式有哪些？请详细说明自动提交和手动提交的区别，以及各自的优缺点。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

自动提交省事但可能丢，手动提交精确可控。

# 参考回答

自动提交按时间间隔自动提交 offset，简单但可能重复或丢；手动提交在业务处理完再提交，精确可控，配合 checkpoint 用。生产多用手动。

# 追问

- 手动提交什么时候提交？
