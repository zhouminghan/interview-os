---
id: SPARK-0001
type: technical
question: 你在工作里做的 SparkSQL 优化有哪些
topic: [spark, sql, tuning]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-14-bytedance-cn-transaction-ads
    company: 字节跳动
    position: 大数据开发（校招）
    date: 2026-09-14
---

# 一句话

围绕「少读、少 shuffle、少倾斜、少 UDF」展开，核心是用广播、分区裁剪、缓存和调参降低数据量与 shuffle 开销。

# 30 秒回答

数据倾斜处理、小表 broadcast join、分区裁剪与列裁剪、谓词下推、复用数据 cache/persist、合理设置 shuffle 分区数、避免 count(distinct) 和低效 UDF、用 Parquet/ORC 列式存储。

# 1 分钟回答

- join 优化：小表 broadcast、调整 join 顺序、避免笛卡尔积
- 倾斜优化：两阶段聚合、加盐、skew join、AQE skew join
- 裁剪：分区裁剪、列裁剪、谓词下推
- 缓存：复用 DataFrame 用 cache/persist，选合适存储级别
- 调参：shuffle 分区数、executor 内存/核数、spill 阈值
- 写法：优先内置函数，避免 count(distinct)，必要时用 group by 去重
- 存储：Parquet/ORC、合理分区，减少小文件

# 追问

- 数据倾斜具体怎么处理？
- AQE 会做哪些优化？
- 什么时候适合 broadcast join？
