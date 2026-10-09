---
id: STARROCKS-0128
type: technical
question: StarRocks 为什么选择自研查询引擎而不使用 Presto 等？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

自研能深度优化向量化、CBO 和存储，性能可控。

# 参考回答

自研查询引擎而不是用 Presto，是因为能做更深度的向量化、CBO 优化器和存储引擎联动，性能上限更高，也不受别人架构约束。代价是研发投入大。

# 追问

- Presto 这类引擎的短板是什么？
