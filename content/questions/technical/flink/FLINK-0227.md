---
id: FLINK-0227
type: technical
question: FlinkSQL中的OVER窗口与传统SQL的区别是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

OVER 窗口做行级计算，和传统 SQL 类似。

# 参考回答

OVER 窗口在 Flink SQL 里做行级聚合，比如排名、累计，和传统 SQL 的窗口函数类似，但流里配时间属性。

# 追问

- OVER 窗口在流里怎么触发？
