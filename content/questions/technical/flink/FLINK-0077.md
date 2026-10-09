---
id: FLINK-0077
type: technical
question: 窗口函数有哪些类型？如何选择？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

增量聚合和全量处理两大类。

# 参考回答

窗口函数分增量聚合，比如 reduce、aggregate，来一条算一条省内存；和全量 process，攒齐整个窗口再处理，灵活但占内存。能增量就增量，省状态。

# 追问

- reduce 和 process 怎么选？
