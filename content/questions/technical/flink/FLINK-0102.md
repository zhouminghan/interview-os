---
id: FLINK-0102
type: technical
question: Flink的异步IO操作如何实现？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

AsyncDataStream 实现异步访问外部系统。

# 参考回答

异步 IO 用 AsyncDataStream 和 AsyncFunction，对外部系统异步请求，不阻塞线程，提高吞吐。适合查 Redis、数据库这类外部调用。

# 追问

- 异步 IO 为什么能提高吞吐？
