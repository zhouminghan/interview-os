---
id: STORAGE-0441
type: technical
question: Clickhouse的数据压缩算法有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

LZ4、ZSTD 等压缩算法。

# 参考回答

ClickHouse 支持 LZ4、ZSTD、GZIP 等压缩，默认 LZ4 快，ZSTD 压缩高。按 CPU 和存储权衡选。列式数据压缩率高。

# 追问

- 压缩怎么选？
