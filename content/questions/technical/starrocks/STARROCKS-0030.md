---
id: STARROCKS-0030
type: technical
question: StarRocks 的存储格式是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

自研列式存储格式，配合压缩和索引。

# 参考回答

StarRocks 用自研的列式存储，按列组织、支持编码压缩、有前缀索引和 Bitmap 等索引，底层分 Tablet 管理。这个格式就是为快速扫描和聚合设计的。

# 追问

- Tablet 是什么？
