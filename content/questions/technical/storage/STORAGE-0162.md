---
id: STORAGE-0162
type: technical
question: 什么是Hive的RCFile格式？请详细说明RCFile格式的特点、优势和使用场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RCFile 是早期的行列混合格式。

# 参考回答

RCFile 是 Hive 早期的列式格式，按行组分列存，比纯行式好但不如 ORC。现在基本被 ORC、Parquet 取代，了解即可。

# 追问

- RCFile 为什么被取代？
