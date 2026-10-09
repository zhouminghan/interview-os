---
id: STORAGE-0443
type: technical
question: 什么是Clickhouse的物化列？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

物化列是预计算的存储列。

# 参考回答

物化列按表达式预计算并存下来，查询时直接读结果，不用现算。适合高频的派生字段，省查询计算，但占存储。

# 追问

- 物化列和普通列区别？
