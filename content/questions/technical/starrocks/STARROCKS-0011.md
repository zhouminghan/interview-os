---
id: STARROCKS-0011
type: technical
question: 查询的维度字段不在分区分桶里、查不出，你会怎么做
topic: [starrocks, index, optimization]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-25-xunlei-data-dev
    company: 迅雷
    position: 资深数据开发（一面）
    date: 2026-09-25
---

# 一句话

靠加物化视图、索引（Bitmap/Bloom Filter）或调整排序键来加速，不必重建表。

# 30 秒回答

排序键/前缀索引覆盖不了该字段时，加物化视图预聚合、建 Bitmap/Bloom Filter 索引、调整排序键顺序、改写查询；实在不行再重建表调整分桶/排序键。

# 1 分钟回答

- 物化视图：预计算常用维度聚合
- 索引：Bitmap（低基数）、Bloom Filter（等值过滤）
- 排序键：调整列顺序覆盖高频查询
- 改写：换写法、减少扫描
- 兜底：重建表调整分桶/排序键

# 追问

- 物化视图和索引怎么选？
- 什么情况必须重建表？
