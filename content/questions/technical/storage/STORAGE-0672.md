---
id: STORAGE-0672
type: technical
question: Hive 中 SELECT * 查询可以做什么优化？
difficulty: 0
topic: []
source_type: knowledge
---

可以将 Hive 中的某些 `SELECT` 查询转换为单个 `FETCH` 任务。通过这种优化，降低了 `SELECT` 查询的延迟。要使用此功能，必须设置 `hive.fetch.task.conversion` 参数的值。允许的值有：

- `0`：表示 FETCH 被禁用。
- `1`：最小模式。支持 `SELECT *`、对分区列进行过滤（`WHERE` 和 `HAVING` 子句）、仅 `LIMIT`。
- `2`：更多模式：支持 `SELECT`、过滤、`LIMIT`（包括虚拟列），甚至可以在 `SELECT` 子句中包含 UDF 表达式。

---
