---
id: STORAGE-0580
type: technical
question: 解释Clickhouse的数据一致性保证。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本最终一致，单节点强一致。

# 参考回答

单节点写入是原子的，副本之间最终一致。查询可能读到不同副本的微小延迟数据。对一致性要求高的场景注意副本同步延迟。

# 追问

- 一致性怎么保证？
