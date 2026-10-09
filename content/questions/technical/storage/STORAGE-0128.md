---
id: STORAGE-0128
type: technical
question: 如何优化Hive的JOIN操作？请详细说明JOIN优化的各种策略（如MapJoin、Bucket MapJoin、SMB Join等）和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MapJoin、Bucket MapJoin、SMB Join 优化。

# 参考回答

MapJoin 小表广播到 map 端；Bucket MapJoin 分桶表 join；SMB Join 要求排序分桶，最高效。按表大小和是否分桶选策略，核心是减少 shuffle。

# 追问

- 三种 join 怎么选？
