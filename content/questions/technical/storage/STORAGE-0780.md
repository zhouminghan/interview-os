---
id: STORAGE-0780
type: technical
question: Hive 如何避免使用 MapReduce？
difficulty: 0
topic: []
source_type: knowledge
---

部分简单查询可走 Fetch Task 而不是 MR：
- `SELECT *` 不加 WHERE
- 简单 `LIMIT` 查询
- `SET hive.fetch.task.conversion=more` 可提高命中率
