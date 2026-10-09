---
id: STORAGE-0454
type: technical
question: Clickhouse的分区和分桶有什么区别？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区按目录，分桶按哈希分文件。

# 参考回答

分区按分区键分目录，查询裁剪；分桶按哈希分文件，用于均衡。ClickHouse 主要是分区，分桶概念不如 Hive 明确。

# 追问

- 分区键怎么选？
