---
id: FLINK-0058
type: technical
question: 状态后端的类型有哪些？各有什么特点？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内存、文件、RocksDB 三种状态后端。

# 参考回答

状态后端有内存、文件、RocksDB。内存快但容量小、易丢；文件能落盘但性能一般；RocksDB 能存超大状态、支持增量 checkpoint，生产大状态首选。

# 追问

- 为什么大状态用 RocksDB？
