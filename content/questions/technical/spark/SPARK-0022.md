---
id: SPARK-0022
type: technical
question: 除数据倾斜外，还做过哪些性能优化
topic: [spark, performance]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

并行度、broadcast、缓存、裁剪、存储格式、小文件、调参、GC 等都是倾斜之外常用优化。

# 30 秒回答

调整并行度、小表 broadcast、缓存复用、分区/列裁剪、谓词下推、避免低效 UDF、用 Parquet/ORC、治理小文件、AQE 调参、GC 和资源优化。

# 1 分钟回答

- 并行度：shuffle 分区数匹配数据量
- join：小表 broadcast、join 顺序
- 缓存：复用 DataFrame cache/persist
- 裁剪：分区/列裁剪、谓词下推
- 存储：列式、合理分区、小文件合并
- 调参：AQE、内存、GC、spill

# 追问

- 你实际做过的优化里效果最明显的是哪个？
- AQE 帮你解决了什么？
