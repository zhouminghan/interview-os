---
id: STORAGE-0531
type: technical
question: 解释Clickhouse的内存限制参数。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

限制单查询内存，防止 OOM。

# 参考回答

内存参数 max_memory_usage 限制单查询内存，超了抛异常。max_bytes_before_external_group_by 让聚合落盘。按节点内存配。

# 追问

- 内存超了怎么办？
