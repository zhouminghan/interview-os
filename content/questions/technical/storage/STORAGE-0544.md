---
id: STORAGE-0544
type: technical
question: 如何配置Clickhouse的缓存大小？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配 uncompressed cache 和 mark cache。

# 参考回答

缓存配置 uncompressed_cache_size 控制未压缩数据缓存，mark cache 缓存索引。按内存和热数据量配。缓存大命中高。

# 追问

- 缓存配多大？
