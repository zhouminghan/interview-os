---
id: STORAGE-0697
type: technical
question: 删除表时 IF EXISTS 的意义？
difficulty: 0
topic: []
source_type: knowledge
---

当发出命令 `DROP TABLE IF EXISTS table_name` 时，如果正在删除的表最初不存在，Hive 会抛出错误。（注：实际效果是加了 IF EXISTS 后表不存在不会报错，原文有误，此处按正确理解翻译）

---
