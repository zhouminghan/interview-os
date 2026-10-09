---
id: STARROCKS-0142
type: technical
question: StarRocks 中的 Colocate Join 是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分桶相同的表在同节点 join，免数据传输。

# 参考回答

Colocate Join 要求两张表用相同的分桶键和桶数，数据就落在同一 BE，join 时本地直接关联，不用跨节点传数据。适合频繁 join 的大表，能省大量 shuffle。

# 追问

- Colocate Join 的前提条件？
