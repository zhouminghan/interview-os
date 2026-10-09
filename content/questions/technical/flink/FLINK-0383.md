---
id: FLINK-0383
type: technical
question: 解释一个实际案例：如何优化FlinkSQL高并发写入性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量写、调并行度、用异步 IO 减少等待。

# 参考回答

高并发写入优化靠批量提交减少写次数、提高并行度、用异步 IO 避免阻塞。sink 连接池调好，避免频繁建连接。写瓶颈多在外部系统。

# 追问

- 批量写有什么风险？
