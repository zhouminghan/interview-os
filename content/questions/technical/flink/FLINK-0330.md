---
id: FLINK-0330
type: technical
question: FlinkSQL中的TopN查询如何实现？有哪些优化技巧？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 row_number 窗口函数排名取前 N。

# 参考回答

TopN 用 row_number over 分区排序，过滤排名小于等于 N。优化靠窗口大小控制状态、用排序键避免全排序。全局 TopN 比分组 TopN 状态更大。

# 追问

- TopN 状态大吗？
