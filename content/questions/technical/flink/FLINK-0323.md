---
id: FLINK-0323
type: technical
question: 解释FlinkSQL中异步函数(Async Function)的概念及实现方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

异步函数不阻塞线程，等待外部结果时并发处理。

# 参考回答

异步函数用于访问外部系统，用 AsyncDataStream 和 AsyncFunction 实现，请求外部时不阻塞线程，提高吞吐。SQL 里主要是异步 lookup，DataStream 里用异步 IO。

# 追问

- 异步 IO 为什么提升吞吐？
