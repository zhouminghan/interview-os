---
id: STORAGE-0105
type: technical
question: Hive中的聚合函数有哪些？请详细说明常用聚合函数（如SUM、AVG、COUNT等）的使用方法和场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

求和、计数、平均值等聚合函数。

# 参考回答

常用聚合函数：sum 求和、count 计数、avg 平均、max min 最值、count distinct 去重计数。大基数去重用 distinct 慢，可考虑近似。配合 group by 用。

# 追问

- count distinct 为什么慢？
