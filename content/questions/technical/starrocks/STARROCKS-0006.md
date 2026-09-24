---
id: STARROCKS-0006
type: technical
question: StarRocks 集群的存储架构是怎么样的
topic: [starrocks, architecture]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

存算一体下 BE 既存又算，数据按分区分桶切成 Tablet，多副本分布在各 BE。

# 30 秒回答

FE 管元数据和查询计划，BE 负责存储和执行；数据分区内分桶为 Tablet，多副本分布在不同 BE 保证高可用；存算分离则数据放共享存储、计算走 CN。

# 1 分钟回答

- FE：元数据、SQL 解析/优化/调度
- BE：本地存储 + 查询执行（存算一体）
- Tablet：分区内分桶的最小存储单元，多副本
- 存算分离：计算节点 CN + 共享存储（对象存储/HDFS）

# 追问

- Tablet 和副本是什么关系？
- BE 挂了数据会丢吗？
