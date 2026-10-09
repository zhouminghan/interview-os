---
id: STORAGE-0607
type: technical
question: 解释Clickhouse的物化视图与实时数据的权衡。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

物化视图加速但增加写入开销。

# 参考回答

物化视图加速查询，但写入时多一份计算，增加延迟和存储。按查询频率权衡，高频聚合才建。

# 追问

- 物化视图值得吗？
