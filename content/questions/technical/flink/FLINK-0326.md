---
id: FLINK-0326
type: technical
question: 如何在FlinkSQL中处理无界流数据的去重问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用主键去重、窗口去重或状态加 TTL。

# 参考回答

无界流去重用主键模型按 key 去重，或用窗口内 distinct、ROW_NUMBER 去重。纯无界去重要状态存所有见过的 key，要配 TTL 或 Bloom Filter 控制状态。

# 追问

- 无界去重状态怎么控制？
