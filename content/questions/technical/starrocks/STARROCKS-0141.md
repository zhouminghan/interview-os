---
id: STARROCKS-0141
type: technical
question: StarRocks 的内存管理是怎样的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

统一内存池，查询、导入、缓存按需分配加隔离。

# 参考回答

内存管理是统一内存池，查询执行、导入、缓存都从池里分，但要做隔离和上限，防止大查询把内存吃光导致 OOM。内存参数可以按节点规模调。

# 追问

- 内存池怎么避免大查询拖垮别人？
