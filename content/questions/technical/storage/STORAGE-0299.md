---
id: STORAGE-0299
type: technical
question: 解释HBase的数据删除原理。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

删除打标记，compact 才真删。

# 参考回答

删除不是立刻删，而是写入删除标记，读时过滤。Major Compaction 时才真正清理数据。所以删除后短期还能恢复，这是 HBase 的删除语义。

# 追问

- 删除后能查到吗？
