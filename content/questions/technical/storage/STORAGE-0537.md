---
id: STORAGE-0537
type: technical
question: 物化视图如何提升查询性能？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

预聚合结果，查询直接复用。

# 参考回答

物化视图把聚合结果提前算好，查询命中直接读结果，省去实时聚合。适合高频聚合查询。写入时增量更新。

# 追问

- 物化视图适合什么？
