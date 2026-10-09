---
id: STARROCKS-0194
type: technical
question: StarRocks 中的 GROUP BY 性能优化技巧？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用聚合模型、物化视图预聚合，减少基数。

# 参考回答

GROUP BY 慢往往是聚合维度基数高或数据量大。优化靠聚合模型或物化视图预聚合，大基数去重用 bitmap，减少分组数。分区裁剪也能缩小范围。

# 追问

- 基数高为什么慢？
