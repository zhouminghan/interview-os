---
id: SPARK-0031
type: technical
question: 有没有碰到过 Spark 数据倾斜，怎么处理
topic: [spark, skew]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

定位热点 key 后用加盐、热点拆分或 AQE 处理，先过滤脏数据。

# 30 秒回答

先抽样定位热点 key，然后加盐两阶段聚合、热点拆分单独处理、AQE skew join、过滤脏数据、调整并行度。

# 1 分钟回答

- 定位：UI/抽样找热点 key
- group by：加盐两阶段聚合
- join：热点拆分 / 两阶段加盐 join
- 通用：AQE skew join、过滤 null/脏数据

# 追问

- 你实际案例里热点 key 是什么？
- 加盐还原怎么做？
