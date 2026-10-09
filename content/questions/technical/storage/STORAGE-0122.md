---
id: STORAGE-0122
type: technical
question: 如何理解Hive的查询优化？请详细说明查询优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

少读、少 shuffle、少倾斜。

# 参考回答

查询优化核心是少读数据、少 shuffle、处理倾斜。手段有分区裁剪、列裁剪、谓词下推、MapJoin、并行执行。先看执行计划找瓶颈。

# 追问

- 优化策略怎么选？
