---
id: STORAGE-0662
type: technical
question: 如何在 LOAD DATA 中指定加载 HDFS 文件？
difficulty: 0
topic: []
source_type: knowledge
---

必须从 `LOAD DATA` 语句中移除 `LOCAL` 子句，以避免加载本地文件。一旦移除了 `LOCAL` 子句，就可以加载 HDFS 文件。

---
