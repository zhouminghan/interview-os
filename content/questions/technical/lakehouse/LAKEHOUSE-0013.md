---
id: LAKEHOUSE-0013
type: technical
question: Iceberg 能支持 Spark 离线与 Flink 实时对同一张表增删改吗？湖仓表格式主要解决什么痛点？
topic: [lakehouse, iceberg, flink, spark]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

能，但要讲清快照隔离、提交冲突和 Compaction 这三个前提；湖仓表格式解决的是 Hive 上「没有事务、没有行级更新、批流两张表」的老问题。

# 30 秒回答

商汤 AI 开发岗 11-02 一面问的正是这个，因为它同时踩在「数据基建」和「AI Agent 取数」上。回答不能只说「支持」，要说清楚并发写时的乐观并发与重试，以及实时小文件带来的查询退化。

# 1 分钟回答

- 能支持的原因：Iceberg 用快照 + 元数据清单管理文件，读写按快照隔离，批流可共表
- 行级能力：COW（读快写重）/ MOR（写快读需合并）两种模式，按读写比例选
- 并发写：提交时做乐观并发校验，冲突则重试；高频小批量写入要控制 commit 频率
- 实时写入代价：小文件膨胀，需要定期 Compaction 与分区治理，否则查询变慢
- 湖仓表格式解决的痛点：Hive 缺 ACID、无法高效行级更新、Schema 演进笨重、批流割裂、时间旅行缺失
- 对比 Hive：Hive 面向「一次写入多次读取」的批处理，Iceberg 面向可变数据与流批一体
- 面试加分：结合 AI 场景补一句——Agent 取数依赖口径和快照一致，快照可追溯是刚需

# 追问

- Flink 写、Spark 同时读会不会读到中间状态？
- COW 和 MOR 在什么业务下怎么选？
- Compaction 期间查询性能怎么保障？
