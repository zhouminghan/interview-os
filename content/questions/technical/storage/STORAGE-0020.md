---
id: STORAGE-0020
type: technical
question: Binlog 机制是什么
topic: [storage, mysql, binlog]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2025-03-03-bytedance-global-data
    company: 字节跳动
    position: 数据开发（一面）
    date: 2025-03-03
---

# 一句话

Binlog 是 MySQL 的二进制变更日志，记录所有写操作，用于主从复制、数据恢复和数据同步（如 CDC 入数仓）。

# 30 秒回答

Binlog 按事件记录 insert/update/delete 的变更，三种格式：Statement（记 SQL）、Row（记行变更）、Mixed。用途：主从复制、故障恢复、把变更同步到下游（Canal/CDC 接 Binlog 入 Kafka/数仓）。

# 1 分钟回答

- 作用：记录写操作，是 MySQL 逻辑层日志（区别于 redo/undo 的物理/事务日志）
- 格式：Statement / Row / Mixed，Row 更精确、适合 CDC
- 用途：主从复制、数据恢复、CDC 实时同步（Canal/Flink CDC）
- 数据开发场景：消费 Binlog 做实时数据接入

# 追问

- Binlog 和 redo log 的区别？
- CDC 怎么用 Binlog 做实时同步？
