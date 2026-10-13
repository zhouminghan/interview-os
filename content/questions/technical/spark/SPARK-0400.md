---
id: SPARK-0400
type: technical
question: Spark 和 MapReduce 的 Shuffle 有哪些主要区别？
topic: [spark, shuffle, mapreduce]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-10-13-yangteng-data-dev
    company: 扬腾创新
    position: 数据开发（秋招一面）
    date: 2026-10-13
---

# 一句话

MR 的 Shuffle 是固定三阶段且反复落盘，Spark 的 Shuffle 按宽依赖触发、更可控可优化。

# 参考回答

MapReduce 的 Shuffle 是固定的 map 端写盘、reduce 端拉取，中间结果反复落盘，IO 开销大；Spark 的 Shuffle 只在宽依赖（join、groupBy）时触发，可以 map 端预聚合、小表广播避免 shuffle、排序更灵活，中间还能放内存。所以 Spark 的 shuffle 更可控、优化空间更大。

# 追问

- Spark 的 shuffle 为什么比 MapReduce 快？
- Spark 有哪些优化 shuffle 的手段？
