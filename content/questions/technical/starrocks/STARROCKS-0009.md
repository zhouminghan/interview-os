---
id: STARROCKS-0009
type: technical
question: StarRocks 有哪些结构组成
topic: [starrocks, architecture]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-23-anker-data
    company: 安克创新
    position: 数据岗（一面）
    date: 2026-09-23
---

# 一句话

核心是 FE（元数据/查询计划）+ BE（存储/执行），存算分离再加 CN（计算节点）。

# 30 秒回答

FE 负责元数据管理、SQL 解析优化和调度，Leader/Follower 高可用；BE 负责数据存储和查询执行；存算分离架构增加 CN 计算节点。

# 1 分钟回答

- FE（Frontend）：元数据、SQL 解析/优化/调度，Leader/Follower
- BE（Backend）：存储 + 执行，存算一体核心
- CN（Compute Node）：存算分离的计算节点，只算不存
- 其他：Catalog、CBO 优化器、向量化执行引擎、BDBJE 元数据

# 追问

- FE 挂了怎么办？
- BE 和 CN 有什么区别？
