---
id: SPARK-0344
type: technical
question: Spark on YARN Job 提交流程？Cluster 模式 vs Client 模式？（高频⭐⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：spark-submit→RM→ApplicationMaster=Driver(Cluster)/Executor 启动器(Client) | 7 步流程 | 模式选择影响 Driver 位置

Spark on YARN 的提交流程和 MR 类似，但有两种模式（Cluster vs Client），Driver 位置不同。

**🎯 Cluster 模式（生产推荐）流程**：

1. **Client 提交**：`spark-submit --master yarn --deploy-mode cluster ...`，Client 向 RM 请求 AppId 并上传 jar、依赖
2. **RM 分配 Container 启动 ApplicationMaster**：在某 NodeManager（NM）上启动 AM（ApplicationMaster）。**关键差异**：Cluster 模式下 **AM 内部就嵌着 Driver**（即 SparkContext 在 AM 进程里）
3. **Driver 初始化 SparkContext**：在 AM 内部跑用户代码 main()，构建 DAG → DAGScheduler 切 Stage → TaskScheduler 准备调度
4. **AM 向 RM 申请 Executor 资源**：根据 `--num-executors / --executor-cores / --executor-memory` 申请 Container
5. **NM（NodeManager）启动 ExecutorBackend**：拿到 Container 后，AM 联系对应 NM 启动 `CoarseGrainedExecutorBackend` 进程（即 Executor）
6. **Executor 向 Driver 注册**：反向注册（Executor 主动连 Driver）；Driver 通过 TaskScheduler 把 Task 序列化下发
7. **Task 执行 + 结果回收**：Executor 跑 Task 把结果序列化回 Driver；所有 Task 完成后 SparkContext.stop()，AM 向 RM 注销

**🎯 Client 模式**（开发调试用）：
- **Driver 跑在提交命令的本机**（即 spark-submit 那台机器），不在 AM 里
- AM 在 YARN 集群里，但角色退化为"Executor 启动器"——只负责申请 Container 启 Executor，不跑 Driver 逻辑
- Executor 反向注册到本机的 Driver（要求 Client 机器和集群网络互通）

**核心差异对比**：

| 维度 | Cluster 模式 | Client 模式 |
|------|-------------|-------------|
| Driver 位置 | YARN AM 进程里 | 提交机器（spark-submit 终端） |
| Client 关闭影响 | 无影响（Driver 在集群） | 整个 Job 挂掉 |
| 适用场景 | 生产作业 | 开发/调试（看 stdout 方便） |
| Driver 日志查看 | 走 YARN UI / yarn logs | 直接终端输出 |
| 网络要求 | 集群内部 | Client ↔ Executor 需互通 |

> 💡 **专家补充**：
> - **生产 100% 用 Cluster 模式**——Client 模式提交机一关 Job 就死，不可接受。开发期用 Client 看日志方便，但提交线上一定切 Cluster
> - **AM 在 Cluster 模式下身兼两职**：既是 YARN 的 ApplicationMaster（管资源），又是 Spark 的 Driver（管 Task 调度）。这也意味着 AM 挂了整个 Job 就挂了——所以 Spark 设了 `spark.yarn.maxAppAttempts`（默认 2）让 AM 失败时 RM 重启
> - **Executor 数量怎么定？**：`num-executors × executor-cores ≈ 总 task 并行度`。一个常见经验值：每个 executor 给 4~5 cores、4~8 GB 内存，太多 cores 反而 GC 抖动；num-executors 看数据量和 SLA
> - **DynamicAllocation（动态资源分配）**：开启 `spark.dynamicAllocation.enabled=true` 后，Executor 数量会根据 pending task 自动扩缩。配合 `spark.shuffle.service.enabled=true`（External Shuffle Service）使用，避免 Executor 释放时丢失 shuffle 数据
> - **spark-submit 三大资源参数记忆**：
>   - `--num-executors N`：起几个 Executor
>   - `--executor-cores K`：每个 Executor 几核（= 同时跑几个 Task）
>   - `--executor-memory G`：每个 Executor JVM 内存（堆内）

> 🎤 **口语表达版**（面试现场这样说）：
>
> 「Spark on YARN 跟 MR 流程很像，但有个**关键区别**：Spark 多了一个 Driver 的概念，所以要先讲清楚部署模式。
>
> 我先把背景定一下：**生产 99% 都是 Spark on YARN 模式**，Standalone 模式只在小规模测试集群用，Mesos 已经基本退出，K8s 是新趋势但还没完全替代 YARN。所以面试讲提交流程默认就讲 YARN 模式。
>
> Spark on YARN 又有两种**部署模式** —— **Cluster 模式和 Client 模式**，差别就在 Driver 跑在哪。生产基本都用 Cluster 模式，我先按 Cluster 讲。
>
> 第一步，我敲 `spark-submit --master yarn --deploy-mode cluster`，客户端把 jar 和依赖上传到 HDFS，然后向 YARN RM 申请启动 ApplicationMaster。
>
> 第二步，RM 分配一个 Container 起 AM（ApplicationMaster），**这里是 Spark 跟 MR 的核心区别** —— Cluster 模式下 AM 内部直接嵌着 Driver，也就是说用户的 main 方法、SparkContext、DAG 都在 AM 进程里跑。SparkContext 一初始化，DAGScheduler 就开始切 Stage、TaskScheduler 就准备调度 Task。
>
> 第三步，AM 根据用户传的 `--num-executors`、`--executor-cores`、`--executor-memory` 这些参数，向 RM 申请 Executor 用的 Container。
>
> 第四步，每个 Container 在对应的 NodeManager 上启动 CoarseGrainedExecutorBackend 进程 —— 这就是 Executor。Executor 启动后**反向注册**到 Driver，告诉 Driver 我活着、有 N 个核可以跑 Task。
>
> 第五步，Driver 把 Task 序列化下发，Executor 跑完把结果序列化回来。所有 Task 跑完，SparkContext 调 stop，AM 向 RM 注销，资源回收。
>
> **Client 模式的区别**很简单 —— Driver 不在 AM 里跑，而是在我提交命令的那台机器上跑。这就有个坑：我 spark-submit 的终端如果关了，Driver 就死了，整个 Job 就挂了。所以 Client 模式只适合开发调试看日志方便，**生产 100% 用 Cluster**。
>
> 如果面试官追问 Executor 数量怎么定，我会补一句：经验值是每个 Executor 配 4~5 个核、4~8GB 内存，太多核反而 GC 抖动；总并行度大概是 `num-executors × executor-cores`，看数据量和 SLA 倒推。」
>
> ⏱️ **预计讲完时长**：2分~2分30秒
>
> 🔑 **回答时的提示线**：先抛"两种模式"概念 → 主讲 Cluster 五步 → 收尾对比 Client 模式痛点 → 可选补参数经验值

---
