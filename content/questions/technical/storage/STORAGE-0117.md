---
id: STORAGE-0117
type: technical
question: Hive中的外部表如何创建？请详细说明外部表的特点、创建方法、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

EXTERNAL 关键字建外部表，指定位置。

# 参考回答

外部表建表加 EXTERNAL，指定 LOCATION 指向已有数据。删表只删元数据，数据保留。适合数据要共享、迁移或不能误删的场景。

# 追问

- 外部表路径在哪？
