---
id: STARROCKS-0106
type: technical
question: StarRocks 中的表设计最佳实践是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

选对模型、合理分区分桶排序键、控制列数和类型。

# 参考回答

表设计核心是选对数据模型，分区按时间、分桶选高基数列、排序键选高频过滤字段。列不要太多，类型能小就小，注释要全。设计好能少走很多优化弯路。

# 追问

- 列太多会有什么问题？
