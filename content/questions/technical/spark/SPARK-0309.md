---
id: SPARK-0309
type: technical
question: Spark 与 MapReduce 的区别？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q4、字节跳动-交易与广告-20260415 Q7

核心：内存 vs 磁盘。MR 中间结果写磁盘再读回，IO 开销大；Spark 基于内存 DAG 计算，性能快 10~100 倍。

编程模型：MR 只有 Map/Reduce 两个算子，Spark 有丰富算子。容错：MR 重跑 Task，Spark 靠 RDD Lineage 重算。Spark 里 Executor 是 JVM 进程，Task 是线程，比 MR（每个 Task 独立进程）开销更小。

第四点是 DAG 优化——Spark 把多个操作组成 DAG，同 Stage 内做 Pipeline 执行减少不必要的数据落盘。MR 复杂逻辑需串多个 Job。

---
