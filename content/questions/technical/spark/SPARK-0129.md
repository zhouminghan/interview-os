---
id: SPARK-0129
type: technical
question: Spark SQL的join优化策略有哪些？
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

broadcast、sort merge、shuffle hash join 等。

# 参考回答

Spark 的 join 策略有 broadcast hash join 广播小表、sort merge join 大表排序归并、shuffle hash join。CBO 和 AQE 会按表大小自动选。小表 broadcast 最省 shuffle。

# 追问

- broadcast join 对表大小有什么限制？
