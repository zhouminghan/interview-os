---
id: STORAGE-0490
type: technical
question: 解释Clickhouse的聚合函数uniq和count的区别。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

uniq 是近似去重，count distinct 精确。

# 参考回答

uniq 用近似算法快速去重，有误差；count(distinct) 精确但慢。大基数场景用 uniq 或 uniqCombined，性能好很多。能接受误差就用近似。

# 追问

- uniq 误差多少？
