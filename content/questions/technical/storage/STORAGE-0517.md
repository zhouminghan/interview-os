---
id: STORAGE-0517
type: technical
question: Clickhouse的ALTER TABLE MODIFY COLUMN支持哪些修改？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

改类型和默认值，有限制。

# 参考回答

MODIFY COLUMN 能改默认值、注释，改类型有严格限制，只能兼容类型互转。改类型要重写数据，大表慢，要谨慎。

# 追问

- 改类型限制？
