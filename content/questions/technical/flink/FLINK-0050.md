---
id: FLINK-0050
type: technical
question: Flink Table API如何转换为DataStream或DataSet？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 toDataStream 或 toRetractStream 转换。

# 参考回答

Table API 转 DataStream 用 toDataStream，流式结果转回 DataStream；聚合结果可以用 toRetractStream 处理更新和撤回。反过来 DataStream 用 fromDataStream 转 Table。

# 追问

- 撤回流是什么？
