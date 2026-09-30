---
id: SPARK-0334
type: technical
question: Spark任务从客户端提交到执行完成，和Hadoop哪些组件交互？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Client→YARN RM→NM→AM→Executor→HDFS | Shuffle Service | 资源申请释放全链路
> **来源面经**：滴滴金融-数仓社招-20260422 二面Q14

完整链路涉及 YARN 和 HDFS 两大核心组件：

**1. 提交阶段**：客户端（spark-submit 或平台）把 jar 包和配置上传到 **HDFS**，然后向 **YARN ResourceManager** 提交应用。

**2. 资源分配阶段**：ResourceManager 在某个 **NodeManager** 上启动 **ApplicationMaster**（cluster 模式下 Driver 在 AM 中）。AM 再向 RM 申请 Container 资源。RM 根据队列和资源情况分配 Container，各 **NodeManager** 启动 Executor 进程。

**3. 执行阶段**：Driver 把 Task 分发到各 Executor。Executor 从 **HDFS** 读取输入数据（Hive 表的底层文件），处理后如果有 Shuffle 需要通过 **Shuffle Service**（NodeManager 上的服务）交换数据。最终结果写回 **HDFS**。

**4. 完成阶段**：所有 Task 完成后，AM 通知 RM 释放资源，Executor 退出。

**总结交互的组件**：
- **YARN RM**：全局资源调度，接受提交、分配 Container
- **YARN NM**：容器管理、启动 Executor、提供 Shuffle Service
- **HDFS**：数据读写、jar 包存放、Shuffle 数据持久化（部分场景）

> 💡 **专家补充**（大数据架构师视角，面试中视情况展开）
>
> - **这道题考察的是对大数据生态的整体理解**：不是只会写 SQL，还要知道 SQL 背后的组件是怎么协作的
> - **Client 模式 vs Cluster 模式的区别**：Client 模式 Driver 在提交端，Cluster 模式 Driver 在 AM 中。生产环境用 Cluster 模式，因为 Client 退出后任务还能继续跑
> - **Shuffle Service 是容易被忽略的关键组件**：它在 NM 上独立运行，即使 Executor 被回收，下游 Task 还能通过 Shuffle Service 拉取 Shuffle 数据。这是 Spark 动态资源分配（Dynamic Allocation）的基础

---
