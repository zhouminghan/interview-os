---
id: STORAGE-0526
type: technical
question: 排序键的选择对查询性能有什么影响？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

排序键决定索引和扫描效率。

# 参考回答

排序键决定数据物理顺序和稀疏索引，选常用过滤和等值字段放前面。排序键好，索引定位准、扫描少，查询快。

# 追问

- 排序键怎么选？
