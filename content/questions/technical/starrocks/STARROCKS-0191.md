---
id: STARROCKS-0191
type: technical
question: 如何解决 StarRocks 中的数据热点问题？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

热点 key 加盐打散或单独分桶，分桶键选均匀。

# 参考回答

数据热点就是某些 key 数据特别多，导致少数 tablet 过大。解法是分桶键选高基数均匀列，热点 key 加盐打散或单独处理。看 tablet 大小分布能定位。

# 追问

- 怎么发现 tablet 热点？
