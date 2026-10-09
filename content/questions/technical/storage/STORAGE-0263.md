---
id: STORAGE-0263
type: technical
question: 什么是HBase的批量操作？如何使用？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量 Put、Get、Delete 提高效率。

# 参考回答

批量操作用 List 的 Put、Get、Delete 一次提交多条，减少网络往返。适合大批量读写，注意批量大小别太大。

# 追问

- 批量大小怎么定？
