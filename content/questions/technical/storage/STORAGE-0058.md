---
id: STORAGE-0058
type: technical
question: 解释一下Hive的存储格式转换。请详细说明格式转换的方法、工具、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建新表用目标格式重写数据。

# 参考回答

格式转换一般建一张目标格式的新表，用 INSERT OVERWRITE 从旧表读数据写进去。也可以改表格式再重写分区。注意字段类型和分区要对应。

# 追问

- 格式转换要注意什么？
