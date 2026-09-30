---
id: SPARK-0335
type: technical
question: HDFS 的架构组成是什么？各组件职责是什么？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：NameNode 元数据管理 | DataNode 数据块存储 | SecondaryNameNode 辅助合并 | HA 高可用
> **来源**：字节-数开-20260422 Q7

HDFS 是 Master-Slave 架构，核心由三个角色组成：

**NameNode（主节点）**：
- 管理文件系统的元数据：文件目录树、文件与 Block 的映射关系、Block 与 DataNode 的映射关系
- 元数据存储在内存中以保证快速访问，持久化通过 FsImage（全量快照）+ EditLog（增量操作日志）实现
- 是整个 HDFS 的单点，挂了整个集群不可用（所以需要 HA）

**DataNode（从节点）**：
- 负责实际数据块（Block）的存储和读写，默认 Block 大小 128MB
- 默认 3 副本策略：第一副本放本地机架，第二副本放同机架另一节点，第三副本放不同机架
- 定期向 NameNode 发送心跳（默认 3 秒）和块报告，NameNode 通过心跳判断 DataNode 是否存活

**SecondaryNameNode（辅助节点）**：
- **不是 NameNode 的热备**，它的职责是定期合并 EditLog 到 FsImage，防止 EditLog 过大导致 NameNode 重启慢
- 合并流程：拉取 EditLog 和 FsImage → 在本地合并 → 生成新的 FsImage 推送回 NameNode

**HA 高可用方案**：
- 用两个 NameNode（Active + Standby）替代 SecondaryNameNode
- 通过 JournalNode 集群共享 EditLog，ZooKeeper 做故障检测和自动切换
- Standby NameNode 持续同步 EditLog，切换时几乎无感知

> 💡 **专家补充**：面试中常见的追问是"SecondaryNameNode 是不是备用的 NameNode"——这是经典陷阱，答案是否。它只做 EditLog/FsImage 合并，不提供故障转移。

---
