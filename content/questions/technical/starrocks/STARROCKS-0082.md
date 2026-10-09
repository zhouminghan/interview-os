---
id: STARROCKS-0082
type: technical
question: StarRocks 的数据倾斜问题如何处理？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分桶键选高基数列，热点数据单独处理或加盐。

# 参考回答

数据倾斜一般是因为分桶键基数低或热点 key。解法是分桶键选高基数、均匀的列，热点 key 可以加盐打散或单独分桶。看 tablet 数据分布就能发现倾斜。

# 追问

- 加盐打散会带来什么问题？
