---
id: FLINK-0321
type: technical
question: FlinkSQL中如何创建和使用自定义Format格式？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现 FormatFactory 定义序列化和反序列化。

# 参考回答

自定义 Format 要实现 FormatFactory 和序列化反序列化逻辑，在 DDL 里用 FORMAT 指定。很少自己写，内置 CSV、JSON、Avro 基本够用。

# 追问

- Format 和 Connector 的区别？
