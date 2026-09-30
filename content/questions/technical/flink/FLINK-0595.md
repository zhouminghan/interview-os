---
id: FLINK-0595
type: technical
question: Flink JobManager 挂了会怎样？高可用怎么做？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：JM 单点故障 | HA 模式 → ZooKeeper + 持久化 JobGraph | Standby JM 接管

**JM 挂掉的影响**：
- 默认配置下，JM 挂 = 整个 Job 死。所有 TM 因为收不到 JM 心跳也会停 Task
- Checkpoint 机制保证状态没丢（落在 HDFS/OSS），但 Job 必须重新提交

**HA 配置（生产必备）**：
- `high-availability.type: zookeeper`：用 ZK 做 leader 选举
- `high-availability.storageDir: hdfs:///flink/ha/`：JobGraph 元数据持久化路径
- 启动多个 JM（active + standby），通过 ZK 选 leader
- Active JM 把 JobGraph、Checkpoint 元数据写到 HDFS；挂掉后 standby 通过 ZK 选举上位 → 从 HDFS 恢复 JobGraph + 最近 Checkpoint → 重启 Job

**恢复时间**：
- ZK 选举 + 从 Checkpoint 恢复，通常秒级到分钟级
- 期间 TM 处于"找不到 JM"状态，但状态本身不会丢

> 💡 **专家补充**：
> - **YARN/K8s 自带的 AM 重启 ≠ Flink HA**：YARN 默认会重启 AM（即 JM），但只是"进程级重启"，重启后还是新的 JobGraph。Flink HA 的精髓是"恢复同一个 Job 的元数据"，让 Job 像没断过一样
> - **K8s 部署的 HA 用 ConfigMap 替代 ZK**：`high-availability.type: kubernetes`，元数据存在 K8s ConfigMap 里，不再依赖 ZK
> - **HA 不解决 TM 单点**：TM 挂了会让该 TM 上的 Task 全失败，触发 Job 整体failover（从 Checkpoint 恢复）。要降低这种影响只能多备份（增加并行度）或开 unaligned checkpoint

---
