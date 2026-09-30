---
id: STORAGE-0627
type: technical
question: Hive 能用于 OLTP 系统吗？
difficulty: 0
topic: []
source_type: knowledge
---

不能，Hive 不适合 OLTP 系统。它不支持行级别的 insert 和 update。在 OLTP 系统中，我们必须更新每个订单或每一行。

---
