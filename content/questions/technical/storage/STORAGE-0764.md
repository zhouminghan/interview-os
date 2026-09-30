---
id: STORAGE-0764
type: technical
question: 什么是倾斜表（Skewed table）？
difficulty: 0
topic: []
source_type: knowledge
---

当某些值出现频率远超其他值时，可将这些值单独存储，提高查询性能。建表时用 `SKEWED BY` 指定倾斜列。
