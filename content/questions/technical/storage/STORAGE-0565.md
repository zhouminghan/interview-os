---
id: STORAGE-0565
type: technical
question: 解释Clickhouse的物化列对查询性能的影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

物化列预计算省查询计算。

# 参考回答

物化列提前算好派生值存下来，查询直接读，省计算。适合高频派生字段，但占存储和写入开销。

# 追问

- 物化列代价？
