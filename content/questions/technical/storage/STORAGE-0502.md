---
id: STORAGE-0502
type: technical
question: Clickhouse的时间序列数据如何按小时/天聚合？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

toStartOfHour/toStartOfDay 分组。

# 参考回答

按时间聚合用 toStartOfHour、toStartOfDay 把时间截断到小时或天，再 group by。适合时序指标聚合。

# 追问

- 时间截断函数？
