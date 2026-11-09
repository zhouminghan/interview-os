---
id: SPARK-0061
type: technical
question: 什么是Spark的广播变量？如何使用？
topic:
- spark
difficulty: 1
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-10-13-yangteng-data-dev
    company: 扬腾创新
    position: 数据开发（秋招一面）
    date: 2026-10-13
---

> **来源面经**：扬腾创新-数据开发一面-20261013

# 一句话

小数据广播到各 Executor，避免重复传输。

# 参考回答

广播变量把只读的小数据集发到每个 Executor 缓存一份，join 或计算时直接本地用，避免每个 task 都传一遍。大表 join 小表时用 broadcast 能省大量 shuffle。

# 追问

- 广播变量适合多大数据？
