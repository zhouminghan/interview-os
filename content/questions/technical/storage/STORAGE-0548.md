---
id: STORAGE-0548
type: technical
question: 如何选择Clickhouse的硬件配置？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CPU 多核、内存大、SSD。

# 参考回答

ClickHouse 吃 CPU 和内存，配多核 CPU、大内存给缓存、SSD 磁盘。按数据量和查询复杂度配。单机性能强。

# 追问

- 硬件怎么配？
