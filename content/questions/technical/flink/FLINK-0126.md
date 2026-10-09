---
id: FLINK-0126
type: technical
question: Flink与Hive的集成特点是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Hive Catalog 读 Hive 表，写 Hive 表。

# 参考回答

Flink 和 Hive 集成通过 Hive Catalog 复用 Hive 元数据，能读写 Hive 表。支持流写 Hive 和批读 Hive 数据。

# 追问

- Hive Catalog 是什么？
