---
id: STARROCKS-0077
type: technical
question: StarRocks 的内存参数如何调优？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理分配查询内存和导入内存，避免 OOM。

# 参考回答

内存调优主要控制单查询内存上限、执行内存和导入内存的分配。大查询要限制内存防止 OOM，同时保证缓存够用。一般按节点内存和并发数来配。

# 追问

- 内存不够时会怎样？
