---
id: FLINK-0357
type: technical
question: 解释如何在SQL作业中嵌入DataStream自定义操作。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 toDataStream 转出做自定义操作再转回。

# 参考回答

SQL 作业里嵌自定义操作，可以把表 toDataStream 转成流，做 DataStream 的自定义逻辑，再用 fromDataStream 转回表继续 SQL。这样复杂逻辑用 DataStream 写。

# 追问

- 转来转去有性能损耗吗？
