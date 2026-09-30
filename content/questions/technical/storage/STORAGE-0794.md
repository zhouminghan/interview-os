---
id: STORAGE-0794
type: technical
question: MySQL 底层速查
difficulty: 0
topic: []
source_type: knowledge
---

**Binlog**：STATEMENT（简单）/ ROW（CDC同步）/ MIXED
**B+ 树**：非叶只存索引（树矮IO少）+ 叶子链表（范围快）
**HashMap put**：hash→定位桶→链表→树化→扩容
