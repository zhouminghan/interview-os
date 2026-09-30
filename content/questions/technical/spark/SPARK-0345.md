---
id: SPARK-0345
type: technical
question: Hadoop MR、Spark、Flink Job 提交流程对比？三者本质差异？（高频⭐⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：三者都跑在 YARN 上 | AM 角色不同 | 计算模型从批到流演进 | 资源生命周期不同

| 维度 | MR | Spark | Flink |
|------|----|----|----|
| **AM（ApplicationMaster）角色** | MRAppMaster：管 MapTask/ReduceTask 调度 | Cluster 模式：AM = Driver；Client 模式：AM 退化为 Executor 启动器 | JobManager（JM）：Dispatcher + ResourceManager + JobMaster 三合一 |
| **Driver / JM（JobManager）位置** | 无 Driver 概念，AM 直接调度 | Cluster：AM 内 / Client：本机 | per-job 模式：YARN 启 JM / session 模式：长驻 JM |
| **Task 进程** | YarnChild（MapTask/ReduceTask） | CoarseGrainedExecutorBackend（Executor，跑 Task 线程） | TaskManager（跑 Task slot） |
| **资源生命周期** | 一次性，Job 结束就释放 | 默认 Job 期间持有，DynamicAllocation 可动态扩缩 | per-job：Job 结束释放；session：常驻直到手动停 |
| **数据计算模型** | 批，一次 Map + Shuffle + Reduce | 批 + 微批（Spark Streaming）/ 真流（Structured Streaming） | 真流（按事件触发），批是流的特例 |
| **中间结果** | 落盘 HDFS | 优先内存，溢出落本地磁盘 | 算子之间内存传递 / 状态落 RocksDB |
| **容错机制** | Task 失败重跑 | RDD Lineage 重算 + Checkpoint | Checkpoint + State Snapshot（Chandy-Lamport） |
| **典型提交命令** | `hadoop jar xxx.jar` | `spark-submit --master yarn ...` | `flink run -m yarn-cluster ...` 或 `flink run -t yarn-application ...` |

**三者共性**（站在 YARN 视角）：
1. 都是 Client 提交 → RM → 启 AM/JM → AM 申请 Container 跑 Task
2. 都遵守 YARN 的两级调度（RM 管资源、AM 管任务）
3. Container 都是资源单元（CPU + 内存）

**三者本质差异**（一句话总结）：
- **MR**：批处理鼻祖，磁盘开销大，一个 Job 一个 AM
- **Spark**：基于内存的批 + 微批，DAG 优化，AM ≈ Driver
- **Flink**：真流处理，状态原生，JM 多角色合一

> 💡 **专家补充**：
> - **演进史一句话**：MR（2005，磁盘批）→ Spark（2012，内存批+微批）→ Flink（2014，真流）。每代都在前代基础上解决前代的瓶颈：MR 慢→Spark 内存；Spark 流不够实时→Flink 原生流
> - **"AM"在三个引擎里语义重要程度不同**：
>   - MR：AM 是"工头"，纯调度，几乎不存数据
>   - Spark Cluster：AM 是"大脑"，Driver 在里面，状态多
>   - Flink：JM（相当于 AM）是"指挥所"，存元数据 + Checkpoint 协调，但不是 Driver（Flink 没 Driver 概念，作业图直接发给 TaskManager 跑）
> - **生产部署模式选择**：
>   - 长跑流任务（Flink）→ session 模式（共享 JM 减少启动开销）或 application 模式（隔离性更好）
>   - 批量任务（Spark/MR）→ per-job/cluster 模式（资源用完就还）
> - **现代趋势是"K8s 替代 YARN"**：Spark on K8s（3.0+ GA）、Flink Native Kubernetes（1.10+），不再依赖 YARN。但传统大数据场景 YARN 仍是主流

> 🎤 **口语表达版**（面试现场这样说）：
>
> 「这三个引擎站在 YARN 视角看**套路是一样的**：客户端提交 → RM（ResourceManager）启一个管家 → 管家申请 Container 跑 Task。差别在三点上：
>
> **第一是管家的角色定位**。
> MR 里管家叫 MRAppMaster（即 ApplicationMaster 在 MR 中的实现），是个"工头"角色 —— 它不存什么数据，就负责调度 MapTask 和 ReduceTask。
> Spark 的 Cluster 模式下管家叫 AM（ApplicationMaster），但**它身兼两职**，既是 YARN 的 ApplicationMaster 又是 Spark 的 Driver，DAG、SparkContext、状态全在它里面，所以它一挂整个 Job 就挂。
> Flink 里管家叫 JobManager（JM），更复杂 —— 它是"三合一"，同时是 Dispatcher（接收 Job）、ResourceManager（申请资源）、JobMaster（调度 Task），但**它不是 Driver**，Flink 没有 Driver 这个概念，作业图直接发给 TaskManager（TM）去跑。
>
> **第二是计算模型的演进**。
> MR 是批处理鼻祖，2005 年的，中间结果落 HDFS，磁盘 IO 重。
> Spark 是 2012 年出来的，把中间结果搬到内存里，DAG 优化，比 MR 快 10~100 倍，但流处理是微批模拟的。
> Flink 是 2014 年的，真流处理 —— 每来一条事件就触发计算，批是流的特例，状态原生支持。这是一条"磁盘 → 内存 → 流式"的演进线。
>
> **第三是资源生命周期**。
> MR 的资源是 Job 级一次性的，Job 结束就释放。
> Spark 默认也是 Job 级，但开 Dynamic Allocation 之后可以根据 pending task 动态扩缩。
> Flink 看部署模式 —— per-job 是 Job 级，session 模式是常驻集群多 Job 共享，application 模式是 App 级。
>
> 一句话总结：**MR 是磁盘批的鼻祖，Spark 是内存批的代表，Flink 是真流的代表**，但底层都靠 YARN 的两级调度把资源管起来。」
>
> ⏱️ **预计讲完时长**：1分30秒~2分钟
>
> 🔑 **回答时的三个抓手**：①管家角色不同 ②计算模型演进 ③资源生命周期 —— 这三条覆盖 95% 的对比追问

---
