---
id: FLINK-0226
type: technical
question: 解释FlinkSQL中的GROUP BY子句用法及其在流处理中的特点。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

流式 group by 是持续聚合，结果持续更新。

# 参考回答

流处理里 GROUP BY 是持续聚合，数据来一条更新一次结果，配窗口做有界聚合。和批处理的一次性 group by 不同。

# 追问

- 流式 group by 状态会膨胀吗？
