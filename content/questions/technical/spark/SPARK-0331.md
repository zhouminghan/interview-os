---
id: SPARK-0331
type: technical
question: Spark核心原理、宽窄依赖、Shuffle机制、内存模型？（综合版）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：DAG调度 | 宽依赖触发Shuffle | 窄依赖流水线 | Tungsten内存管理 | HashShuffle/SortShuffle演进
> **来源**：字节-AI Agent数据开发-20260420 Q9

Spark 核心是基于 DAG 的分布式计算引擎。提交作业后，SparkContext 把逻辑计划解析成 DAG，根据依赖类型划分 Stage。窄依赖（map、filter）可以在同一个 Stage 内流水线执行，不需要 Shuffle。宽依赖（groupByKey、reduceByKey）会触发 Shuffle，Stage 在这里断开。

Shuffle 机制是最影响性能的环节。早期 HashShuffle 每个 Map 任务为每个 Reduce 分区生成一个文件，文件数爆炸。后来改成 SortShuffle，Map 端先排序再合并成一个文件加索引，大幅减少文件数。

内存模型方面，Spark 采用统一内存管理，执行内存和存储内存共享同一块区域，可以动态调配。Tungsten 项目引入了堆外内存管理和二进制数据格式，减少 GC 开销。

---
