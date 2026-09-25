---
id: LAKEHOUSE-0001
type: technical
question: Hudi 有实际使用吗，Hudi 是什么
topic: [lakehouse, hudi]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

Hudi 是开放的数据湖表格式，在数据湖上提供 upsert、增量读、时间旅行和事务能力。

# 30 秒回答

Hudi 提供表格式 + 元数据 + 索引，支持 upsert、增量读取、时间旅行；核心概念有 Timeline、File Groups、File Slices，表类型分 COW 和 MOR。

# 1 分钟回答

- 能力：upsert、增量读、时间旅行、schema 演进
- 结构：Timeline（提交日志）、File Group、File Slice
- 表类型：COW（读优化）、MOR（写优化）
- 场景：MySQL binlog 同步、近实时 upsert、流式入湖

# 追问

- COW 和 MOR 区别？
- Hudi 的 Timeline 是什么？
