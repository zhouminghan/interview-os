---
id: STARROCKS-0216
type: technical
question: Doris 的整体架构？FE / BE 各自做什么？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：FE=元数据+SQL优化+调度 | BE=存储+查询执行 | MySQL协议兼容 | MPP架构

Doris 是 **MPP 架构**，两类节点：

**FE（Frontend，Java）**：相当于"大脑"
- 元数据管理（表结构、分区、副本位置）
- SQL 解析、生成执行计划、CBO 优化
- 任务调度、副本管理、Routine Load 等导入任务管理
- 角色：Master / Follower / Observer，BDB JE 实现高可用

**BE（Backend，C++）**：相当于"干活的"
- 数据实际存储（按 Tablet 切分），默认 3 副本
- 接 FE 下发的 Plan Fragment 做实际计算
- Compaction、副本同步、快照

**对外**：MySQL 协议兼容，BI/JDBC 直接连，门槛极低，是 Doris 一大优势。

> 💡 类比 Spark：FE ≈ Driver，BE ≈ Executor。但 BE 是常驻进程，不像 Spark 每次提交都拉 Executor，所以 Doris 是交互式（秒级），Spark 是批处理（分钟级起）。

---
