---
id: STORAGE-0530
type: technical
question: 如何优化Clickhouse的写入性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量写，避免小写入。

# 参考回答

写入优化用批量插入、异步插入、减少写入频率。大量小写入会产生很多数据块，影响合并和查询。攒批写。

# 追问

- 小写入为什么慢？
