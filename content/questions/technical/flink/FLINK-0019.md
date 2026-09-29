---
id: FLINK-0019
type: technical
question: Flink CDC 的原理（无锁读取 / Exactly-Once / 全量增量衔接）
topic: [flink, cdc]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

Flink CDC 基于 Debezium 读数据库底层日志（binlog/WAL）捕获变更，实现无锁读取、Checkpoint 端到端 Exactly-Once、全量增量无缝衔接。

# 30 秒回答

无锁：读 binlog/WAL 而非查表，不加锁、几乎零侵入。Exactly-Once：Checkpoint 保存 binlog 位点 + 下游幂等/事务提交。全量增量衔接：Incremental Snapshot 记 high watermark，全量 chunk 并行读，之后从位点续增量，不丢数据。

# 1 分钟回答

- 数据源：MySQL binlog（ROW 格式）、PostgreSQL WAL、Oracle/SQLServer 日志
- 无锁：不访问数据页，CPU/IO 开销极低
- Exactly-Once：Checkpoint 存位点，下游配合幂等/事务
- 全量增量：2.0+ Incremental Snapshot，启动记位点，全量 chunk 并行，增量无缝衔接
- 注意：要监控 binlog/WAL 保留策略，避免堆积

# 追问

- 为什么只开 auto-commit 达不到 Exactly-Once？
- 全量阶段怎么和增量衔接不丢数据？
