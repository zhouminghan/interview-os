---
id: SPARK-0340
type: technical
question: MapReduce 编程模型详解？为什么被 Spark/Flink 替代？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Map→Shuffle→Reduce 三阶段 | 中间结果落盘 | 一次性 Job | DAG 优化缺失 | 现状 Hive on Spark
> **来源面经**：美团-数据开发实习一面-20260430 Q8

MapReduce 是 Hadoop 生态最早的分布式计算框架，核心是**两阶段编程模型**：

**Map 阶段**：把输入数据切成 split，每个 split 起一个 mapper 处理，输出 `<key, value>` 中间结果。

**Shuffle 阶段**：把同一个 key 的数据从所有 mapper 汇聚到同一个 reducer，过程中要**排序、分区、可选 combiner**。环形缓冲区（100MB，80% 阈值溢写）→ 按 partition 排序 → 合并有序文件 → 跨网络传到 reducer 端。

**Reduce 阶段**：reducer 拿到一个 key 的所有 value 做聚合，输出最终结果到 HDFS。

**核心问题**：
1. **中间结果全部落磁盘**——map 输出落盘、shuffle 拉取落盘、reduce 输出落 HDFS，磁盘 IO 极重
2. **复杂作业要串多个 MR**——每个 MR 之间数据通过 HDFS 传递（带副本），更慢
3. **缺乏 DAG 优化**——不能跨 stage 合并算子、不能 pipeline 执行
4. **每个 Task 一个 JVM 进程**——启动开销大

**被替代的原因**：
- **Spark**：基于内存的 RDD/DataFrame，DAG 优化能跨 stage 合并算子，Executor 是常驻 JVM 进程 Task 是线程，性能快 10~100 倍
- **Flink**：流批一体 DAG 引擎，pipeline 流式传输不落盘

**生产现状**：日常已经不直接写 MR 了。**Hive 默认引擎从 MR 切到 Spark 或 Tez** 是行业共识，性能差几倍以上。我们用的是 **Hive on Spark**——HiveQL 语法 + Spark 执行引擎。

**MR 的现代价值**：理解大数据计算的基础原理，**Shuffle 这套思想被 Spark/Flink 继承下来**——按 key hash 重分布、排序、合并这些核心机制本质上是一脉相承的。

> 💡 **专家补充**：
> - **MR 的设计哲学是"用磁盘换稳定性"**——所有中间结果落盘，单 Task 失败可以从磁盘恢复，集群规模再大也不怕。但代价就是慢。Spark 反过来"用内存换性能"，丢了内存数据靠 Lineage 重算
> - **MR 的 Shuffle 是后续所有大数据引擎的"教科书"**——分区、排序、合并、归并这一套流程被 Spark/Flink/Tez 全盘继承，差别只是优化方向（Spark 减少落盘，Flink 改成 pipeline）
> - **现在面试还问 MR 不是因为它有用，而是考察基础**——理解 MR 才能真正理解为什么 Spark 快、为什么 Flink 流式更高效。八股归八股，原理理解透了能讲出深度

---
