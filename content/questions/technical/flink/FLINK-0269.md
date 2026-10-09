---
id: FLINK-0269
type: technical
question: 解释FlinkSQL中的时区处理机制及如何配置时区。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置全局时区，用 TIMESTAMP 和本地时区。

# 参考回答

Flink SQL 时区可配置，用 TIMESTAMP 类型和时区参数统一。跨时区数据要注意统一到同一时区再算。

# 追问

- 跨时区数据怎么处理？
