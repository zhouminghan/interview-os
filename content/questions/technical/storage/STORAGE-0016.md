---
id: STORAGE-0016
type: technical
question: ClickHouse 的 too many parts 是什么，怎么解决
topic: [storage, clickhouse]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

高频小批量写入产生大量 part，merge 跟不上就报 too many parts。

# 30 秒回答

每次 INSERT 生成一个 part，写入快于 merge 时 part 堆积；解法：攒批写入、Buffer 表、异步插入、调 merge 参数、加粗分区。

# 追问

- 单分区 part 阈值是多少？
- ClickHouse 为什么不适合高频小批量写？
