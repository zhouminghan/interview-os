---
id: STORAGE-0478
type: technical
question: 解释ALTER TABLE语句在Clickhouse中的限制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

改列类型和删除列有限制。

# 参考回答

ClickHouse ALTER 加列、删列、改默认值可以，但改列类型有严格限制，删除列要谨慎。部分操作要重写数据，大表慢。

# 追问

- 改列类型注意什么？
