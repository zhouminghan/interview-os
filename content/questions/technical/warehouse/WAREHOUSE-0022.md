---
id: WAREHOUSE-0022
type: technical
question: 三范式的概念是什么
topic: [warehouse, normalization]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-08-27-alibaba-data-dev
    company: 阿里巴巴
    position: 数据开发（一面）
    date: 2026-08-27
---

# 一句话

三范式通过规范化减少冗余、避免更新异常，保证数据一致性。

# 30 秒回答

1NF：字段原子性，不可再分；2NF：满足 1NF 且非主属性完全依赖主键；3NF：满足 2NF 且非主属性不传递依赖主键。

# 1 分钟回答

- 1NF：每个字段不可再分
- 2NF：消除部分函数依赖（非主属性不能只依赖主键的一部分）
- 3NF：消除传递依赖（非主属性不能依赖其他非主属性）
- 目的：减少冗余、避免插入/更新/删除异常

# 追问

- 还有 BCNF、4NF 了解吗？
- 范式化和反范式化各有什么场景？
