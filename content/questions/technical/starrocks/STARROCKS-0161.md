---
id: STARROCKS-0161
type: technical
question: 如何测试 StarRocks 的并发查询性能？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

模拟多用户并发查询，测 QPS 和延迟。

# 参考回答

并发测试用工具模拟多用户同时发查询，测峰值 QPS、P99 延迟、资源占用。重点看并发上去后延迟怎么变化，找拐点。

# 追问

- 性能拐点怎么理解？
