---
id: FLINK-0149
type: technical
question: 如何处理Flink中的数据类型转换问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用明确类型和映射函数转换。

# 参考回答

数据类型转换问题用 Flink 的 TypeInformation 和明确的 POJO，避免泛型和 avro 映射不匹配。转换时显式指定类型。

# 追问

- TypeInformation 是什么？
