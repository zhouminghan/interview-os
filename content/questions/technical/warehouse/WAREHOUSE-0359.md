---
id: WAREHOUSE-0359
type: technical
question: Map/Reduce task 个数怎么定？默认多少？分区怎么决定？
difficulty: 0
topic: []
source_type: knowledge
---

**🎯 这道题的「成长价值」**：表面问的是 MR 的 task 数，实际在考你**有没有把"分区/并行度"这个概念横跨 MR、Spark、Flink 打通**。三家虽然术语不同，但核心问题一致——**数据被切成几份、每份交给谁算**。面试时你把三家串起来讲，证明你理解的是"并行计算模型"而非"某个框架的配置参数"。

---

**🧠 核心概念统一记忆**

不管叫 task / partition / subtask，本质都是「**计算的最小并行单元**」。Shuffle 的本质则是「**跨分区重新分配数据**」，在 MR/Spark 里就是 Stage 的分界线。

| 概念 | MR | Spark | Flink |
|------|-----|-------|-------|
| 并行单元叫法 | Task（Map Task / Reduce Task） | Task / Partition | SubTask |
| 无 Shuffle 的连续计算 | 一个 Map Task 的所有步骤 | 一个 **Stage**（窄依赖的连续 Pipeline） | 一个 **OperatorChain**（chained 算子合并为一个 Task） |
| 一次 Shuffle | Map Stage → Reduce Stage | **1 Shuffle = 2 Stages 的边界** | 1 KeyBy = upstream subtask → downstream subtask |
| 分区/并行度控制 | Map：InputSplit 数；Reduce：`mapreduce.job.reduces` | `spark.sql.shuffle.partitions`（默认 **200**） | `env.setParallelism()` / 算子 `.setParallelism()` |
| 分区路由算法 | `HashPartitioner`：hash(Key) % Reduce 数 | 同左（默认 HashPartitioner） | hash(Key) % maxParallelism → KeyGroup → Subtask |
| 默认 Map Task 数 | **每 128MB（block size）一个 InputSplit → 一个 Map Task** | — | — |

---

**📖 分引擎详解**

**1) MapReduce**
- **Map Task 数**：由 InputSplit 决定。FileInputFormat 默认按 HDFS block size（128MB）切分，**一个 Block 一个 Map Task**。Hive 可调 `mapreduce.input.fileinputformat.split.maxsize` 控制切片大小。
- **Reduce Task 数**：优先级——用户显式设 > 框架推导 > 默认 1。Hive 推导公式：`Reduce 数 ≈ 总数据量 / hive.exec.reducers.bytes.per.reducer`（默认 256MB per reducer）。
- **分区路由**：默认 `HashPartitioner`——`hash(Key) % NumReduceTasks`。用户可自定义 `Partitioner` 类。
- **关系**：Map Stage → Shuffle → Reduce Stage。**Map Task 数和 Reduce Task 数无直接对应关系**（原回答"Map 数量通常与 Reduce 一致"是错的，已修正）。

**2) Spark**
- **Job = 一个 action（count/save/collect）触发**
- **Stage = 以 Shuffle 为边界的 Task 集合**，Stage 内全部是窄依赖（pipeline 执行）
- **1 Shuffle = ShuffleMapStage（写）→ 空等 Shuffle 数据 → ResultStage/下一个 ShuffleMapStage（读）**
- **分区数**：`spark.sql.shuffle.partitions`（默认 **200**，数据量小时须调小避免大量空 task）
- **Map 端分区数**：由上一个 Stage 的输出分区数决定
- **Reduce 端分区数**：由当前 Stage 的 Shuffle 分区数决定

**3) Flink**
- **并行度（parallelism）**：每个算子的 SubTask 数。`env.setParallelism(N)` 全局，也可算子级覆盖。
- **最大并行度（maxParallelism，默认 128）**：决定 KeyGroup 的数量范围，keyBy 路由依赖它。
- **OperatorChain**：条件允许时，上下游算子链化（chain）合并为一个 Task（无 Shuffle 开销）。chain 断开条件 = forward 分发、并行度一致、无 Shuffle 边。
- **不叫 Task**：Flink 的 Task = 一个 chain 的物理执行单元；SubTask = Task 的一个并行实例；不要跟 MR/Spark 的 Task 混淆。

---

**🔗 「1 Shuffle = 2 Stages」关系速记**

```
          Stage N                        Stage N+1
    ┌───────────────┐              ┌───────────────┐
    │  Map Tasks    │              │  Reduce Tasks │
    │  (Shuffle Write) ──Shuffle──→│ (Shuffle Read) │
    │  写磁盘+网络传  │              │  拉数据+聚合   │
    └───────────────┘              └───────────────┘
         ↑                                 ↑
    全部完成之后                         才开始启动
```

在 Spark 里，`groupBy` / `reduceByKey` / `join` 都会触发一次 Shuffle，即把一个 Stage 打断成两个。面试里能把这个图画出来并解释原因（Shuffle 是高开销操作，必须等上游全写完下游才能开始读），已经远超多数候选人的水平。

**💡 面试点评**：如果面试官只问 MR 的 task 数，你答完 MR 后主动加一句——"同样的问题在 Spark 里就是 `spark.sql.shuffle.partitions`（默认 200），Flink 里则是算子的 parallelism。核心理念都是控制数据切分的粒度，避免单个 task 数据过大或空转"——面试官会觉得你通盘理解了三套引擎的并行模型。
