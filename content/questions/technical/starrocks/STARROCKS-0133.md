---
id: STARROCKS-0133
type: technical
question: StarRocks 的内存管理为什么采用当前设计？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

统一内存管理加按需分配，兼顾查询和导入。

# 参考回答

内存管理设计成统一池加按需分配，查询和导入共用但要隔离，避免互相挤爆。这样能在并发查询和大导入之间平衡，防止 OOM。

# 追问

- 查询和导入为什么要隔离内存？
