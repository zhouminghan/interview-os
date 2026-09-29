---
id: STORAGE-0017
type: technical
question: ClickHouse 物化视图和传统数据库物化视图的区别
topic: [storage, clickhouse]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

ClickHouse 物化视图是 INSERT 触发器，写入主表时自动预聚合到目标表；传统 MV 是定时刷新。

# 30 秒回答

CH MV 写时触发计算并落盘，查询直接读预聚合结果；只对新增数据生效，历史需 backfill，删主表不同步 MV。

# 追问

- MV 和 SummingMergeTree 怎么配合？
- 删主表数据 MV 会怎样？
