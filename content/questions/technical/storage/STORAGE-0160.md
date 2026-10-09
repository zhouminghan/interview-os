---
id: STORAGE-0160
type: technical
question: 什么是Hive的Avro格式？请详细说明Avro格式的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Avro 带 schema，适合序列化和传输。

# 参考回答

Avro 是行式格式，自带 schema，跨语言序列化好。适合消息传输和数据交换，不如列式适合分析。Hive 里做数据交换用。

# 追问

- Avro 为什么适合传输？
