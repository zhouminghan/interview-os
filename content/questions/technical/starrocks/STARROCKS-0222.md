---
id: STARROCKS-0222
type: technical
question: Doris vs ClickHouse vs StarRocks 怎么选？
difficulty: 0
topic: []
source_type: knowledge
---

> **要点提纲**：Doris=MPP+JOIN强+MySQL协议 | ClickHouse=单表极快+JOIN差+运维重 | StarRocks=Doris分支+商业化激进

| 维度 | Doris | ClickHouse | StarRocks |
|---|---|---|---|
| 架构 | MPP | Shared-Nothing 列存 | MPP（Doris 分支） |
| JOIN 能力 | 强（Colocate / Bucket Shuffle / Broadcast） | 弱（建议大宽表） | 强（外表 / 物化视图更激进） |
| 协议 | MySQL 协议 | 自有协议（部分兼容） | MySQL 协议 |
| 运维 | 简单（FE+BE） | 复杂（依赖 ZooKeeper） | 简单（FE+BE） |
| 实时写入 | Stream Load / Routine Load | 不擅长高并发实时写 | 同 Doris + 升级 |
| 典型场景 | 多维分析 / 实时报表 / Ad-hoc | 单表大宽表聚合 | 多维分析 / 实时数仓 |

**选型原则**：
- 高并发短查询 + 多表 JOIN → Doris / StarRocks
- 单表大宽表极致聚合（日志分析） → ClickHouse
- 业务方需要 MySQL 协议直连 → Doris / StarRocks

---
