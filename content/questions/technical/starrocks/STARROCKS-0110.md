---
id: STARROCKS-0110
type: technical
question: 如何在 StarRocks 中设计明细模型和聚合模型？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

明细全保留，聚合按维度预聚合，看是否要原始明细。

# 参考回答

明细模型原样存每行，适合要保留明细、任意下钻；聚合模型按维度预聚合，省空间、查询快，但丢明细。看业务要不要原始明细来选。

# 追问

- 两种模型能混用吗？
