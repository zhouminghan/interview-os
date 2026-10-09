---
id: FLINK-0387
type: technical
question: 解释一个实际案例：如何优化FlinkSQL中的异步IO性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提高异步并发、缓存外部结果、批量请求。

# 参考回答

异步 IO 优化提高并发度、缓存热数据、批量请求减少往返。外部系统慢就加缓存和超时。异步 IO 本身就是为了不阻塞线程提高吞吐。

# 追问

- 异步 IO 的并发怎么控？
