---
id: SPARK-0217
type: technical
question: 如何优化Spark的磁盘I/O？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 SSD、减少读写、合并小文件。

# 参考回答

磁盘 IO 优化上 SSD，减少 shuffle 和落盘，合并小文件，合理压缩。IO 慢会拖累整个任务。

# 追问

- shuffle 落盘能避免吗？
