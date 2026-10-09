---
id: STORAGE-0503
type: technical
question: 如何在Clickhouse中实现数据抽样查询？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SAMPLE 子句做抽样。

# 参考回答

用 SAMPLE 子句按比例抽样，快速查看数据。分桶表抽样更均匀。适合大数据量下做探索和近似计算。

# 追问

- SAMPLE 怎么用？
