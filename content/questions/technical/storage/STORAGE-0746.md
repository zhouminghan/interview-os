---
id: STORAGE-0746
type: technical
question: Schema on Read 是什么意思？
difficulty: 0
topic: []
source_type: knowledge
---

Hive 在读取数据时才验证 Schema，而非写入时。加载数据时不检查格式，查询时才解析。这使得加载速度极快，但对数据质量要求高。
