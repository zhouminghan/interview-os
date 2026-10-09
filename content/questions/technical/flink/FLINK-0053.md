---
id: FLINK-0053
type: technical
question: 如何优化Flink Table API和SQL的性能？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 planner 优化、合理窗口、减少状态、调资源。

# 参考回答

优化 SQL 主要靠优化器自动做谓词下推、join 优化，手动层面合理设窗口、控制状态大小、调并行度和资源。先看执行计划。

# 追问

- SQL 执行计划怎么看？
