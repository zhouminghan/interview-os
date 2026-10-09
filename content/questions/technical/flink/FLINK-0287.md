---
id: FLINK-0287
type: technical
question: 解释FlinkSQL的调试方法和常用工具。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看执行计划、日志、SQL Client。

# 参考回答

调试用 EXPLAIN 看执行计划，看日志，用 SQL Client 交互式验证。本地 MiniCluster 复现问题。

# 追问

- 调试 SQL 最先做什么？
