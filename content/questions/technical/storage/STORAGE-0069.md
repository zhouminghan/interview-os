---
id: STORAGE-0069
type: technical
question: Hive中的执行引擎有哪些？请详细说明各种执行引擎的特点、配置方法、使用场景和性能差异。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MapReduce、Tez、Spark 三种引擎。

# 参考回答

MapReduce 最老最慢，Tez 用 DAG 优化比 MR 快，Spark 内存计算最快。现在多配 Spark 或 Tez。配置执行引擎参数切换，性能差别明显。

# 追问

- Tez 和 Spark 怎么选？
