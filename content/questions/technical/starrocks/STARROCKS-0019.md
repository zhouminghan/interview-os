---
id: STARROCKS-0019
type: technical
question: StarRocks 的系统架构是怎样的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

前端 FE 管元数据和查询计划，后端 BE 管存储和计算。

# 参考回答

StarRocks 分两层：FE 是前端节点，负责元数据管理、SQL 解析、查询计划；BE 是后端节点，负责实际存储和计算。FE 有 leader 和 follower 保证高可用，BE 存数据分片并执行查询。

# 追问

- FE 的 leader 和 follower 是什么关系？
