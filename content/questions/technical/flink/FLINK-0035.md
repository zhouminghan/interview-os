---
id: FLINK-0035
type: technical
question: 解释DataStream和DataSet API的区别及使用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DataStream 流式，DataSet 批式，现在统一到 DataStream。

# 参考回答

DataStream 是流式 API，DataSet 是老的批式 API。Flink 后来把批处理也统一到 DataStream，DataSet 已废弃。有界流就是批。

# 追问

- DataSet 为什么被废弃？
