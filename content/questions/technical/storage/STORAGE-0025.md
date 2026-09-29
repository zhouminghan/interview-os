---
id: STORAGE-0025
type: technical
question: ClickHouse 面试题大纲（200 题覆盖范围）
topic: [storage, clickhouse, outline]
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ClickHouse 200 题大纲，四块：基础架构、SQL 语法、性能调优、高级特性。

# 30 秒回答

基础：列存/向量化/MergeTree 引擎族/副本分片/表引擎/Kafka 引擎/物化视图/PREWHERE；SQL：JOIN 算法/字典/TTL/ASOF JOIN/Bitmap 近似去重/ARRAY JOIN；优化：分区与排序键/LowCardinality/EXPLAIN/批量写入/内存并发；高级：副本一致性/实时数仓架构/系统表/常见故障/行业案例。

# 1 分钟回答

- 基础：列式存储、向量化、MergeTree（PARTITION/ORDER BY/PRIMARY KEY/TTL）、Replicated/Distributed、Replacing/Summing/Collapsing/Aggregating 表引擎、Kafka 引擎、物化视图、PREWHERE、Keeper
- SQL：Hash/Merge/GraceHash JOIN、Dictionary、TTL 冷热分层、ASOF JOIN、groupBitmap/HyperLogLog、ARRAY JOIN
- 优化：分区粒度、排序键、LowCardinality、EXPLAIN、BULK INSERT、内存参数、并发控制、有序预聚合
- 高级：副本同步、Kafka→CH 实时架构、system.* 系统表、OOM/TOO_MANY_PARTS 故障、电商/金融/广告案例、Iceberg/Hudi 集成

# 追问

- ClickHouse 的 too many parts 是什么？
