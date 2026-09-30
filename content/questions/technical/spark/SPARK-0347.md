---
id: SPARK-0347
type: technical
question: Zookeeper 在大数据生态中的高可用作用？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-数据开发实习一面-20260310 Q19
> **要点提纲**：Leader-Follower | ZAB 协议 | 过半机制 | NameNode HA | RM HA | Kafka Controller

**ZK 自身的高可用设计**：
- 奇数节点部署（3/5/7），Leader-Follower 架构
- ZAB 协议保证一致性：写请求由 Leader 处理，过半 Follower 确认即提交
- Leader 故障后剩余节点快速选举新 Leader（秒级恢复）

**ZK 为大数据组件提供 HA 的核心机制**：

| 组件 | ZK 的作用 |
|------|----------|
| HDFS NameNode HA | Active/Standby 状态管理 + ZKFC（ZKFailoverController）自动故障切换 |
| YARN RM HA | Active/Standby ResourceManager 选举和切换 |
| Kafka（旧版） | Broker 注册、Topic 元数据存储、Controller 选举、消费者 Offset 管理 |
| HBase | RegionServer 存活检测（临时节点 + Session 超时）、Master 选举 |

**底层原理**：利用 ZK 的临时节点（Ephemeral Node）+ Watch 通知 + 分布式锁实现故障感知和自动切换。进程挂了 → Session 超时 → 临时节点消失 → Watch 通知触发 → 竞选新 Leader。

> 💡 **专家补充**：新版 Kafka（3.x+，KRaft 模式）和 Flink 的新版 HA 已支持去 ZK。但传统 Hadoop 生态（HDFS/YARN/HBase）仍强依赖 ZK
