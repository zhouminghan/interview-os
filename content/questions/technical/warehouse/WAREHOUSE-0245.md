---
id: WAREHOUSE-0245
type: technical
question: 从 OLTP 数据库同步数据到 OLAP 数仓，常见方案有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：批量导出 vs CDC 实时同步 | Sqoop / DataX 离线 | Canal / Flink CDC 实时 | 选型看 SLA

**三种主流方案**：

| 方案 | 工具 | 延迟 | 适用 |
|------|------|------|------|
| **批量全量/增量** | Sqoop、DataX、Spark JDBC | 小时级 / T+1 | 离线数仓、历史数据迁移 |
| **CDC 实时同步** | Canal、Debezium、Flink CDC、Maxwell | 秒级 | 实时数仓、HTAP 场景 |
| **双写** | 业务代码同时写两边 | 实时 | 不推荐（一致性难保证） |

**CDC 原理**：监听 MySQL Binlog → 解析成结构化变更事件（INSERT/UPDATE/DELETE）→ 写入下游（Kafka / Doris / Iceberg）。

**Flink CDC 当前最主流**：
- 一站式：Source 直接读 Binlog 生成流
- 支持全量 + 增量无缝切换（Snapshot 阶段全量、之后切增量）
- Exactly-Once 语义靠 Checkpoint
- 下游可写 Iceberg/Hudi/Doris/Kafka

> 💡 **专家补充**：
> - **CDC 不只是"把数据搬过去"**——还要解决：①类型映射（MySQL DECIMAL → Iceberg）；②DDL 变更同步（业务加字段，下游怎么跟）；③主键去重（同一行多次更新，下游只保留最新）
> - **DataX vs Sqoop**：DataX 是阿里开源的全量/增量同步工具，比 Sqoop 更现代，支持插件式扩展几十种数据源。Sqoop 老旧、社区活跃度低
> - **CDC 的常见坑**：Binlog 格式必须是 ROW（不是 STATEMENT）；账号要有 REPLICATION SLAVE 权限；分库分表场景要用 Flink CDC 的多表合并能力

---


---
