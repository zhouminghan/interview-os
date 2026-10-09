---
id: STORAGE-0157
type: technical
question: 如何优化Hive的文件格式？请详细说明各种文件格式的特点、选择标准和优化方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分析用列式，选对格式省存储提速。

# 参考回答

文件格式选列式 ORC/Parquet，配压缩和分区。文件太大分块，太小合并。格式选对是存储优化的基础。

# 追问

- 文件大小多少合适？
