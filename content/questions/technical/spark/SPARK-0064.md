---
id: SPARK-0064
type: technical
question: 如何优化Spark应用程序的性能？
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

减少 shuffle、合理并行度、用 DataFrame、调内存。

# 参考回答

性能优化围绕少 shuffle、少数据量、少序列化：小表 broadcast、减少 groupBy、合理并行度、用 DataFrame 代替 RDD、内存够用。先看 UI 定位慢的 stage。

# 追问

- 优化第一步做什么？
