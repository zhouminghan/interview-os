---
id: STORAGE-0566
type: technical
question: 如何优化Clickhouse的字典加载性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制字典大小和加载频率。

# 参考回答

字典加载优化控制字典大小、用增量刷新、合理缓存。字典小加载快，太大内存高。按变更频率设刷新。

# 追问

- 字典加载怎么优化？
