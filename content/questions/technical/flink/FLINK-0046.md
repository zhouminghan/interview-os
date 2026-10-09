---
id: FLINK-0046
type: technical
question: 如何在Flink中注册表（Table）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 createTemporaryView 或 Catalog 注册表。

# 参考回答

注册表用 createTemporaryView 注册临时视图，或通过 Catalog 注册持久表。注册后就能在 SQL 里引用。

# 追问

- 临时表和持久表的区别？
