---
id: STORAGE-0763
type: technical
question: CREATE TABLE 中 OVERWRITE 子句如何工作？
difficulty: 0
topic: []
source_type: knowledge
---

`CREATE TABLE ... AS SELECT` 时使用 OVERWRITE 会先删除目标表再创建，否则如果表已存在会报错。
