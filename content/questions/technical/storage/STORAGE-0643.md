---
id: STORAGE-0643
type: technical
question: 如何修改 Hive 会话的设置？
difficulty: 0
topic: []
source_type: knowledge
---

可以使用 `SET` 命令更改 Hive 会话内的设置。甚至可以使用 `SET` 命令更改 MapReduce 作业的设置。如果仅使用属性名调用 `SET` 命令，将获得该属性的当前值。

使用 `SET -v` 可以获得 Hive 系统中包括 Hadoop 默认值在内的所有属性列表。

---
