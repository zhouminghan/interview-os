---
id: STARROCKS-0208
type: technical
question: StarRocks 在 HTAP 领域的发展如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

主键模型补实时更新，但还不是完整 HTAP。

# 参考回答

StarRocks 往 HTAP 靠，主键模型支持 upsert 和点查，能做一点事务型工作，但核心还是分析。它在实时分析加更新的场景越来越强。

# 追问

- HTAP 是什么？
