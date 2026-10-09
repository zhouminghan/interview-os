---
id: FLINK-0263
type: technical
question: 如何在FlinkSQL中实现多维分析(OLAP)场景的窗口操作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多维度分组加窗口，配合预聚合。

# 参考回答

多维分析在 Flink SQL 里做多维度分组聚合，配窗口做时间切片。实时 OLAP 一般 Flink 算，再写查询层做多维下钻。

# 追问

- 实时 OLAP 的典型链路？
