---
id: STORAGE-0035
type: technical
question: Hive中的SerDe是什么？它的作用是什么？请详细说明SerDe的工作原理、使用方法和自定义开发。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

SerDe 是序列化和反序列化器，负责读写格式。

# 参考回答

SerDe 把 Hive 里的行数据序列化成文件格式，读的时候反序列化。建表指定 ROW FORMAT 的 SerDe，自定义格式要实现 SerDe 接口。一般内置的就够用。

# 追问

- 什么时候自定义 SerDe？
