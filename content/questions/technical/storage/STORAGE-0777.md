---
id: STORAGE-0777
type: technical
question: SORT BY vs ORDER BY vs DISTRIBUTE BY
difficulty: 0
topic: []
source_type: knowledge
---

| 关键字 | 作用 | 全局有序 |
|--------|------|---------|
| `ORDER BY` | 全局排序，单个 Reducer | ✅ |
| `SORT BY` | 每个 Reducer 内部排序 | ❌ |
| `DISTRIBUTE BY` | 按指定列分发到不同 Reducer | ❌ |
| `CLUSTER BY` | = DISTRIBUTE BY + SORT BY（同列） | ❌ |
