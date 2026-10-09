---
id: STORAGE-0611
type: technical
question: Clickhouse的性能调优案例分享。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

优化排序键和物化视图。

# 参考回答

一个案例是查询慢，优化排序键让索引命中，加物化视图预聚合，扫描量降下来，查询从秒级到毫秒级。

# 追问

- 调优做了什么？
