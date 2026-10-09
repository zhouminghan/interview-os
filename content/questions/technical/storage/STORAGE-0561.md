---
id: STORAGE-0561
type: technical
question: 解释Clickhouse的查询结果集大小限制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

限制结果集大小防止内存爆。

# 参考回答

限制 max_result_rows 等参数控制结果集大小，超了报错。防止超大结果占内存。大结果集应该聚合后返回。

# 追问

- 结果集限制？
