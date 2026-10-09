---
id: STORAGE-0426
type: technical
question: 列式存储相比行式存储有哪些优势？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只读需要的列，压缩好。

# 参考回答

列式存储查询只扫涉及的列，压缩率高，适合聚合分析。行式适合点查和事务。OLAP 场景列式优势明显。

# 追问

- 列式为什么适合分析？
