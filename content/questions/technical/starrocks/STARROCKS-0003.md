---
id: STARROCKS-0003
type: technical
question: StarRocks 有哪些数据模型
topic: [starrocks, data-model]
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

StarRocks 主要有明细、聚合、更新、主键四种模型，核心区别在去重/聚合/更新语义。

# 30 秒回答

明细模型保留全部明细；聚合模型按 key 预聚合；更新模型保证 key 唯一、后写覆盖；主键模型支持 delete/update 实时更新。

# 1 分钟回答

- 明细模型（Duplicate Key）：保留每条明细，无去重
- 聚合模型（Aggregate Key）：按 key 预聚合（sum/max/min/replace）
- 更新模型（Unique Key）：key 唯一，后写覆盖先写
- 主键模型（Primary Key）：支持实时更新和删除，基于主键索引
- 选择：看是否去重、聚合、更新

# 追问

- 主键模型和更新模型有什么区别？
- 聚合模型适合什么场景？
