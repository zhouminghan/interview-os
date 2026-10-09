---
id: SPARK-0085
type: technical
question: RDD的分区策略有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

默认 HashPartitioner 或 RangePartitioner。

# 参考回答

分区策略决定数据怎么分到各分区。默认是 HashPartitioner 按 key hash 分，还有 RangePartitioner 按范围分。分区分得好不好直接影响并行度和倾斜。

# 追问

- hash 分区为什么会倾斜？
