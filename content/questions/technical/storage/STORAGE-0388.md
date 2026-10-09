---
id: STORAGE-0388
type: technical
question: 在实际项目中如何实现HBase的二级索引？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Phoenix 或索引表实现。

# 参考回答

二级索引用 Phoenix 最省事，或用协处理器加索引表。写数据同步维护索引，查询先查索引。索引一致性靠同步写保证。

# 追问

- 用 Phoenix 还是自建？
