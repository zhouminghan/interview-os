---
id: FLINK-0281
type: technical
question: 解释FlinkSQL中状态大小增长过快的原因及解决方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

无界 key、无 TTL、状态没清理。

# 参考回答

状态增长过快多是 key 无界、没有 TTL、聚合维度太多。解法是加 TTL、限制 key、清理过期状态、减少分组基数。

# 追问

- 怎么判断状态增长是否正常？
