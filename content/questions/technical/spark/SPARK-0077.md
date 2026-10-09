---
id: SPARK-0077
type: technical
question: RDD的五大特性是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区列表、compute 函数、依赖列表、分区器、优先位置。

# 参考回答

五大特性：一是分区列表，二是每个分区的计算函数，三是依赖关系，四是可选的 key-value 分区器，五是数据本地性的优先位置。这五条定义了 RDD 怎么存、怎么算、怎么恢复。

# 追问

- 优先位置有什么用？
