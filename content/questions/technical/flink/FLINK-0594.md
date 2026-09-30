---
id: FLINK-0594
type: technical
question: Flink Job 提交流程？三种部署模式（Session / Per-Job / Application）有什么区别？（高频⭐⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：JobManager + TaskManager 两大角色 | 三种部署模式 | Application 模式是 1.11+ 推荐 | per-job 即将废弃

> 📖 **术语速查**（本题及下面 Flink HA / Job 提交相关题统一适用）
>
> | 简写 | 全称 | 角色 |
> |------|------|------|
> | **JM** | **JobManager**（Flink 主节点） | Flink 集群 Master，三合一身份（Dispatcher + ResourceManager + JobMaster） |
> | **TM** | **TaskManager**（Flink 工作节点） | Flink 集群 Worker，含若干 Slot 跑 Task |
> | **Slot** | Task Slot（任务槽） | TM 内的资源隔离单位，Task 在 Slot 里跑 |
> | **Dispatcher** | JM 的子角色之一 | 接收 Client 提交的 Job、启动 JobMaster |
> | **JobMaster** | JM 的子角色之一 | 单个 Job 的调度核心（≠ JobManager 整体） |
> | **ResourceManager**（Flink 内的） | JM 的子角色之一 | Flink 内部资源协调，向 YARN/K8s 申请 TM Container |
> | **RM**（YARN 的） | YARN ResourceManager | YARN 集群级 Master，全局管资源 |
> | **AM** | YARN ApplicationMaster | YARN 作业级 Master；Flink on YARN 里 JM ≈ AM 的角色 |
> | **NM** | YARN NodeManager | YARN 节点级 Worker，管单机 Container 生命周期 |
>
> ⚠️ **常见歧义**：
> - **"ResourceManager" 在不同上下文是两个东西**：YARN 的 ResourceManager（集群资源管理器，简写 RM）和 Flink JM 三合一里的 ResourceManager（Flink 内部模块，向 YARN 申请资源）。本题里"YARN RM"指前者，"JM 内的 ResourceManager"指后者
> - **"JM" 不是单个进程的别名**：是个**复合角色**，Dispatcher / ResourceManager / JobMaster 三合一都在 JM 进程里
> - **"JobMaster" ≠ "JobManager"**：JobMaster 只是 JM 三合一里的一个子角色，专管单个 Job 的 ExecutionGraph 调度

**🎯 Flink 集群核心角色**：
- **JobManager（JM）**：Master 角色，三合一身份
  - **Dispatcher**：接收 Client 提交的 JobGraph，启动 JobMaster
  - **ResourceManager**：申请/管理 TaskManager 资源（与 YARN/K8s 交互）
  - **JobMaster**：单个 Job 的调度核心，把 JobGraph 转成 ExecutionGraph 后下发到 TaskManager
- **TaskManager（TM）**：Worker 角色，每个 TM 有若干 **Task Slot**（资源隔离单位），Task 在 Slot 里跑

**🎯 Job 提交链路（以 YARN per-job 为例）**：

1. **Client 构造 JobGraph**：用户写的 DataStream API 代码 → StreamGraph → 优化 → JobGraph（DAG，节点是算子链）
2. **Client 提交到 YARN RM**：Client 联系 YARN RM（ResourceManager，YARN 集群资源大管家）请求启动 ApplicationMaster
3. **YARN 启 JobManager**：RM 在某 NM（NodeManager，YARN 节点级 Worker）上分配 Container 启动 JM 进程；JM 内的 Dispatcher 接收 JobGraph
4. **JobMaster 启动 + 申请 Slot**：Dispatcher 启 JobMaster；JobMaster 把 JobGraph 转成 ExecutionGraph（含并行度展开），向 ResourceManager（**注意：这里指 JM 内的 ResourceManager 模块，不是 YARN 的 RM**）申请所需 Slot
5. **ResourceManager 申请 TaskManager Container**：JM 内的 ResourceManager 模块向 YARN RM 申请 Container 启 TaskManager
6. **TaskManager 注册 Slot**：TM 启动后向 JM 注册自己的 Slot；JM 把 Slot 分配给 ExecutionGraph 的各个 Task
7. **Task 部署 + 执行**：JobMaster 把 Task 部署到对应 Slot，TM 启动 Task 线程开始处理数据
8. **Checkpoint 协调**：JobMaster 周期触发 Checkpoint，注入 Barrier 到 Source；状态快照持久化到外部存储（HDFS/OSS）
9. **作业结束**：流任务通常永不结束（除非 cancel）；批任务自然完成后 JobMaster 通知 Dispatcher 销毁 Job，释放资源

**🎯 三种部署模式对比**：

| 维度 | Session 模式 | Per-Job 模式（即将废弃） | **Application 模式（1.11+ 推荐）** |
|------|-------------|----------------------|----------------------------|
| **集群粒度** | 多个 Job 共享一个 JM | 每个 Job 一个 JM | 每个 Application 一个 JM |
| **JobGraph 生成** | Client 端 | Client 端 | **JobManager 端（关键差异）** |
| **Client 资源** | 重（生成 JobGraph + 上传依赖） | 重 | 轻（只发 jar 不构造 JobGraph） |
| **隔离性** | 差（同一 JM，互相影响） | 好（一 Job 一 JM） | 好（一 App 一 JM） |
| **资源利用率** | 高（共享 JM） | 低（每 Job 起一次 JM 开销） | 中（一 App 一 JM） |
| **启动延迟** | 低（JM 长驻） | 高（每次起 JM） | 中等 |
| **典型场景** | 多个小流任务 / 交互式查询 | （已不推荐） | 生产长跑流任务、Spark-submit 风格批任务 |
| **提交命令** | `flink run -m yarn-session ...`（先 yarn-session.sh 起集群） | `flink run -m yarn-cluster ...` | `flink run-application -t yarn-application ...` |

**🎯 Application 模式为什么推荐？**

老的 per-job 模式有个致命缺陷：**JobGraph 在 Client 端生成**，意味着：
- Client 机器要下载所有用户依赖 jar，构造 JobGraph 再发到集群
- 大依赖项目（数百 MB）每次提交都很慢
- Client 机器成为单点（提交期间挂了 → Job 起不来）

**Application 模式把 main() 方法搬到 JM 上跑**：
- Client 只发 jar 名字 + 入口类，不构造 JobGraph
- JM 拿到 jar 自己跑 main() 生成 JobGraph
- Client 提交完即可断开，类似 Spark Cluster 模式的体验

> 💡 **专家补充**：
> - **三种模式的演进逻辑**：Session（最早，资源共享但隔离差）→ Per-Job（隔离好但 Client 重）→ Application（既隔离又轻量）。Flink 1.11 之后官方明确 per-job 进入维护模式，长期推 Application
> - **JM 三合一是 Flink 的设计精髓**：YARN/K8s 上一个 JM 进程同时扮演 Dispatcher（多 Job 入口）、ResourceManager（资源协调）、JobMaster（单 Job 调度）。这种设计让单机集群也能跑（standalone 模式）
> - **Slot 是 Flink 资源核心概念**：一个 TM 配 N 个 Slot（默认 = TM 的 CPU 核数）。**Slot 共享（Slot Sharing）**让同一 Job 的不同算子可以共享 Slot——比如 Source、Map、Sink 三个算子链可以塞进一个 Slot，节省资源
> - **JobGraph → ExecutionGraph 是关键转换**：JobGraph 是逻辑 DAG（算子层），ExecutionGraph 是物理执行图（按并行度展开成多个 SubTask）。Web UI 上看到的就是 ExecutionGraph
> - **Flink on K8s 是大趋势**：Application 模式 + Native Kubernetes 后，Flink 直接和 K8s API 交互，不需要 YARN。云原生场景越来越主流

> 🎤 **口语表达版**（面试现场这样说）：
>
> 「Flink 提交流程我会从两个维度讲 —— 先讲**核心角色**，再讲**三种部署模式**，最后落到生产怎么选。
>
> 先把背景定一下：**Flink 提交默认讲 on YARN 模式**，这是国内大厂最主流的部署方式。Flink 也支持 Standalone 集群和 Native Kubernetes，但 YARN 仍是当前主流，所以接下来流程都按 YARN 讲。
>
> 先说角色。Flink 集群里就两个角色：**JobManager 和 TaskManager**。JM 是 Master，但它是个"三合一"的复合体 —— 同时扮演 Dispatcher（接收 Job 提交）、ResourceManager（向 YARN/K8s 要资源）、JobMaster（调度单个 Job 的 Task）。TM 是 Worker，每个 TM 有若干 Slot，Slot 是资源隔离单位，Task 就跑在 Slot 里。
>
> 然后讲提交链路。我用 YARN per-job 模式举例：
>
> 第一步，我在客户端用 DataStream API 写完代码，编译时会先生成 StreamGraph，再优化成 **JobGraph**，这是个逻辑 DAG。
>
> 第二步，客户端把 JobGraph 发给 YARN RM（ResourceManager），RM 分配 Container 启动 JM（JobManager）。JM 里的 Dispatcher 接住 JobGraph，启动一个 JobMaster 实例。
>
> 第三步，JobMaster 把 JobGraph 按并行度展开成 **ExecutionGraph**（物理执行图，Web UI 看到的就是这个），然后通过 JM 内的 ResourceManager（**Flink 内部模块，注意不是 YARN 的 RM**）向 YARN 申请 Container 启动 TaskManager（TM）。
>
> 第四步，TaskManager 启动后**反向注册** Slot 给 JM，JM 把 Slot 分配给具体 Task，Task 部署到 Slot 上开始处理数据。
>
> 第五步，JobMaster 周期触发 Checkpoint，往 Source 注入 Barrier，Barrier 跟着数据流走，状态快照持久化到 HDFS。流任务一般永不结束，除非手动 cancel。
>
> 然后讲**三种部署模式**，这是高频追问点。
>
> **Session 模式**：先用 yarn-session.sh 起一个常驻的 Flink 集群，多个 Job 共享同一个 JM。优点是启动快、资源利用率高，缺点是隔离差，一个 Job 挂了影响其他 Job。适合大量小流任务或交互式查询。
>
> **Per-Job 模式**：每提交一个 Job，YARN 就起一个新的 JM，Job 结束就销毁。隔离性好，但 JobGraph 在客户端生成 —— 客户端要下载所有依赖、构造 JobGraph 再发上去，提交慢、Client 机器还成单点。**这个模式 Flink 1.11+ 已经进入维护模式，不推荐了**。
>
> **Application 模式（1.11+ 推荐）**：这是现在主推的。**关键差异是 main 方法搬到 JM 上跑**，客户端只把 jar 上传，连 JobGraph 都不用本地生成。优点是 Client 又轻又快，提交完立刻断开，每个 App 独立 JM 隔离也好。生产长跑流任务我们都用这个模式。
>
> 一句话总结演进：**Session（共享但不隔离）→ Per-Job（隔离但客户端重）→ Application（既隔离又轻量）**。」
>
> ⏱️ **预计讲完时长**：2分30秒~3分钟（信息量较大，建议先讲角色 + 流程，三种模式可以等追问再展开）
>
> 🔑 **回答时的两层结构**：
> - 第一层先答"角色 + 流程"（1分钟）—— 核心信息
> - 第二层等追问"模式选择"再展开（1~2分钟）—— 体现深度
> - 千万别一上来就讲三种模式细节，会让面试官觉得你抓不住重点

---
