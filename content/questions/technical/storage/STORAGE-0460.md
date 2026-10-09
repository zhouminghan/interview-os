---
id: STORAGE-0460
type: technical
question: Clickhouse如何处理NULL值？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

默认不支持 NULL，用 Nullable 包装。

# 参考回答

ClickHouse 默认列不允许 NULL，需要时用 Nullable 类型包装。Nullable 有额外开销，尽量别用。存储空值用默认值替代。

# 追问

- Nullable 有什么开销？
