---
id: STORAGE-0057
type: technical
question: Hive中的文件格式有哪些？各有什么特点？请详细说明各种文件格式的特点、选择标准和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TextFile、SequenceFile、ORC、Parquet、Avro。

# 参考回答

TextFile 纯文本通用；SequenceFile 二进制键值；ORC、Parquet 是列式，分析场景首选；Avro 带 schema 适合序列化。选格式看场景，数仓分析用 ORC 或 Parquet。

# 追问

- Avro 适合什么场景？
