---
id: STORAGE-0231
type: technical
question: HBase中时间戳的作用是什么？如何利用时间戳实现数据版本控制？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

时间戳区分版本，保留多个历史值。

# 参考回答

HBase 每个 Cell 带时间戳，可以保留多个版本。写入用时间戳区分版本，读取指定版本或最新。实现数据版本控制。

# 追问

- 版本数怎么控制？
