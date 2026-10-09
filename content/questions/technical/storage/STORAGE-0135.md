---
id: STORAGE-0135
type: technical
question: 什么是Hive的桶设计？请详细说明桶设计的原则、策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分桶键选高基数均匀，桶数匹配并行度。

# 参考回答

分桶键选高基数均匀的字段，桶数和 reducer 数或并行度匹配。分桶适合 join 和采样，配合分区使用。桶太多小文件多。

# 追问

- 桶数怎么定？
