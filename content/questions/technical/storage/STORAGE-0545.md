---
id: STORAGE-0545
type: technical
question: 解释Clickhouse的数据压缩对性能的影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

压缩省 IO 费 CPU。

# 参考回答

压缩省磁盘和 IO，但读写要解压压缩，费 CPU。按 CPU 和存储权衡。LZ4 快，ZSTD 压缩高。列式数据压缩比高。

# 追问

- 压缩怎么选？
