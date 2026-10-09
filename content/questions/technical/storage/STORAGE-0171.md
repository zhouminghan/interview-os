---
id: STORAGE-0171
type: technical
question: 如何优化Hive的查询性能？请详细说明查询性能优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

少读、少 shuffle、少倾斜。

# 参考回答

查询优化核心少读数据、少 shuffle、处理倾斜。手段是分区裁剪、列裁剪、谓词下推、MapJoin、并行执行。先看计划再优化。

# 追问

- 优化第一步？
