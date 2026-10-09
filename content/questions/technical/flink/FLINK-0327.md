---
id: FLINK-0327
type: technical
question: 解释FlinkSQL中的连续查询(Continuous Query)概念及实现机制。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

连续查询对持续到来的数据不断更新结果。

# 参考回答

连续查询就是流式 SQL 查询，数据持续进来，结果持续更新。靠状态和动态表实现，窗口、聚合、join 都是连续查询。它不会像批查询那样一次性结束。

# 追问

- 连续查询和批查询的本质区别？
