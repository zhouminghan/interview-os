---
id: STORAGE-0518
type: technical
question: 如何重命名Clickhouse表？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RENAME TABLE 改表名。

# 参考回答

用 RENAME TABLE 旧名 TO 新名。只改元数据，很快。分布式表要注意同步。改名不影响数据。

# 追问

- 改名快吗？
