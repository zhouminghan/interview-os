---
id: FLINK-0377
type: technical
question: 如何使用FlinkSQL实现用户行为分析系统？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时采集行为做漏斗、路径、指标。

# 参考回答

用户行为分析用 Flink SQL 实时处理点击、浏览事件，做漏斗、路径、活跃指标。窗口和状态算行为聚合，写到查询层供分析。

# 追问

- 漏斗分析怎么做？
