---
id: FLINK-0332
type: technical
question: 如何在FlinkSQL中实现高性能流式去重(Deduplication)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用主键模型、窗口去重或近似去重。

# 参考回答

高性能去重优先用主键模型按 key 覆盖，或用窗口内 ROW_NUMBER 去重。大基数去重用 Bloom Filter 或近似算法控制状态。精确去重代价高，能近似就近似。

# 追问

- 精确去重和近似去重怎么选？
