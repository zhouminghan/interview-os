---
id: SPARK-0343
type: technical
question: Hadoop MapReduce Job 提交到 YARN 的完整流程？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Client→RM→ApplicationMaster→Container→Map/Reduce Task | 8 个核心步骤 | 资源调度 vs 任务调度分离

> 📖 **术语速查**（本题及下面 Job 提交相关题统一适用）
>
> | 简写 | 全称 | 角色 |
> |------|------|------|
> | **RM** | **ResourceManager**（YARN 资源管理器） | YARN 集群级 Master，全局管资源 |
> | **NM** | **NodeManager**（YARN 节点管理器） | YARN 节点级 Worker，管单机 Container 生命周期 |
> | **AM** | **ApplicationMaster**（应用主控） | 作业级 Master，每个 Job/App 一个，管 Task 调度 |
> | **MRAppMaster** | MR 引擎里的 AM 实现类 | MR 作业的 AM（属于 AM 的一种） |
> | **Container** | YARN 资源容器（CPU + 内存） | Task 运行的资源单元 |
> | **JM** | **JobManager**（Flink 主节点） | Flink 集群 Master，三合一身份（Dispatcher + ResourceManager + JobMaster） |
> | **TM** | **TaskManager**（Flink 工作节点） | Flink 集群 Worker，含若干 Slot 跑 Task |
> | **Driver** | Spark 驱动器进程 | 跑 main()、SparkContext、DAG 调度 |
> | **Executor** | Spark 执行器进程 | 跑 Task 的工作进程（CoarseGrainedExecutorBackend） |
> | **YarnChild** | MR Task 的 JVM 进程载体 | Container 里启的进程，里面跑 MapTask/ReduceTask |
>
> ⚠️ **常见歧义**：
> - "**RM**" 在不同上下文有歧义：YARN 里指 **ResourceManager**（集群资源管理器）；Flink JM 三合一里也有一个内部模块叫 ResourceManager（向 YARN/K8s 要资源），二者**不是同一个东西**。本题里的 "RM" 默认指 YARN 的 ResourceManager
> - "**AM**" 在 Spark Cluster 模式下身兼两职：既是 YARN 的 ApplicationMaster，也内嵌 Spark 的 Driver
> - "**JM**" 在 Flink 里 ≈ YARN AM 的角色，但功能更复杂（三合一）

MR Job 提交到 YARN 的链路是经典分布式计算的"地标"，必须能完整画图讲下来。8 步：

1. **Client 提交**：`hadoop jar xxx.jar` 触发 Client 向 RM 请求一个 ApplicationId
2. **RM 分配 AppId + 上传资源**：Client 把 jar 包、配置、切片信息（InputSplit）上传到 HDFS（路径形如 `/tmp/hadoop-yarn/staging/<appId>`）
3. **Client 正式提交 Application**：携带 AppId、资源路径提交给 RM 的 ApplicationsManager
4. **RM 启动 ApplicationMaster**：RM 在某个 NodeManager 上分配第一个 Container 启动 MRAppMaster（Job 的"司令部"）
5. **AM 初始化 + 注册**：MRAppMaster（MR 引擎的 ApplicationMaster 实现）启动后向 RM（ResourceManager）注册（汇报自己活着），然后从 HDFS 读切片信息，决定要起多少 Map / Reduce Task
6. **AM 向 RM 申请资源**：通过心跳（heartbeat）请求 Container，RM 的 ResourceScheduler 按队列容量/公平调度算法分配 Container
7. **AM 启动 Task**：MRAppMaster 联系对应 NodeManager（NM），在 Container 里启动 YarnChild 进程，YarnChild 加载 jar、跑 MapTask 或 ReduceTask
8. **Task 汇报 + Job 收尾**：Task 通过 RPC 向 AM（ApplicationMaster）汇报进度；所有 Task 完成后 AM 向 RM 注销，RM 回收资源

**关键角色记忆**：
- **ResourceManager（RM）**：集群级，管资源（Container 分配）
- **NodeManager（NM）**：节点级，管单机的 Container 生命周期
- **ApplicationMaster（AM）**：作业级，每个 Job 一个，管 Task 调度
- **Container**：资源抽象（CPU + 内存），Task 跑在里面

> 💡 **专家补充**：
> - **YARN 的核心设计是"两级调度"**：RM 只管资源（粗粒度，把 Container 给谁），AM 管任务（细粒度，Task 怎么跑）。这种解耦让 YARN 能同时跑 MR、Spark、Flink，每种引擎实现自己的 AM 即可
> - **AM 是 Job 的"单点"但不是真单点**——AM 挂了 RM 会重启它（默认重试 2 次），重启后从 HDFS 上的 staging 目录恢复状态。所以 AM 重启代价不小，生产中要监控 AM 失败率
> - **InputSplit 的关键作用**——Map Task 数 = InputSplit 数。Split 大小默认等于 HDFS Block（128MB），但可调；切多了 Task 启停开销大，切少了并行度不够
> - **YarnChild 是个"通用马甲"**——MR 里 MapTask/ReduceTask 都通过 YarnChild 进程承载，因此 jps 看不到 "MapTask" 进程名，只能看到 YarnChild

> 🎤 **口语表达版**（面试现场这样说）：
>
> 「MR 提交我一般按"三个角色 + 三个阶段"讲。**默认场景就是 MR on YARN**——现在生产基本不用 MR 单机模式或者 MRv1 的 JobTracker 了，YARN 是 2.x 之后的标配。三个角色是 RM、AM、Container —— **RM（ResourceManager，YARN 集群资源大管家）**、**AM（ApplicationMaster，本次作业的项目经理；MR 里具体实现叫 MRAppMaster）**、**Container（资源容器，干活的工位）**。
>
> 第一阶段是**准备**：我在本地敲 `hadoop jar`，客户端先去 RM 那要一个 ApplicationId，然后把 jar 包、配置、还有切片信息上传到 HDFS 的 staging 目录。这一步相当于"提资料、领工号"。
>
> 第二阶段是**起项目经理**：客户端正式提交 Application，RM 在集群里挑一个空闲的 NodeManager，分配一个 Container 用来跑 MRAppMaster。MRAppMaster 一启动，就从 HDFS 把切片信息读出来，知道这次要起多少 MapTask、多少 ReduceTask。
>
> 第三阶段是**真正干活**：MRAppMaster 通过心跳跟 RM 要资源，要到 Container 之后联系对应的 NodeManager 启动 YarnChild 进程，YarnChild 里面跑的就是 MapTask 或 ReduceTask。Task 跑的过程中会通过 RPC 不停地向 AM 汇报进度，全部跑完 AM 就向 RM 注销，资源回收，整个 Job 就结束了。
>
> 这里有个细节我想强调下：**YARN 的设计精髓是两级调度** —— RM 只关心"哪台机器有空闲资源"，AM 关心"我这个作业里 Task 怎么排"。这种解耦让 YARN 同时能跑 MR、Spark、Flink，每种引擎都自己实现一个 AM 就行。」
>
> ⏱️ **预计讲完时长**：1分30秒~2分钟

---
