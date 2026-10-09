---
id: SPARK-0202
type: technical
question: 如何优化Spark的I/O操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

列式存储、分区裁剪、减少小文件。

# 参考回答

IO 优化靠列式 Parquet 减少读、分区裁剪、合并小文件、压缩。读得少 IO 就少，性能就快。

# 追问

- 小文件为什么拖慢性能？
