---
id: FLINK-0316
type: technical
question: 什么是FlinkSQL中的动态分区裁剪(Dynamic Partition Pruning)？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

根据一边的过滤结果动态裁剪另一边的分区。

# 参考回答

动态分区裁剪是在 join 时，根据一边表过滤出来的分区值，动态跳过另一边表无关的分区，减少扫描。批处理里收益明显，让优化器自动做。

# 追问

- 和静态分区裁剪的区别？
