---
id: STORAGE-0745
type: technical
question: Hive 适合用于 OLTP 系统吗？
difficulty: 0
topic: []
source_type: knowledge
---

不适合。Hive 不支持行级别的 insert 和 update。OLTP 需要及时更新每一行，Hive 是为批处理设计的。
