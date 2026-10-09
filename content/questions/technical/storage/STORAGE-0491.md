---
id: STORAGE-0491
type: technical
question: 如何实现Clickhouse中的行转列操作？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

arrayJoin 做行转列，聚合做列转行。

# 参考回答

行转列用 arrayJoin 把数组展开，列转行用条件聚合 sumIf 或数组函数。窗口和数组函数组合实现行列转换。

# 追问

- 行列转换怎么做？
