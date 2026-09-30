---
id: SPARK-0330
type: technical
question: MySQL B+ 树索引结构？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q11

B+ 树 vs B 树两个区别：①只有叶子节点存数据，非叶子只存 key → 一页存更多 key → 树更矮 → IO 更少；②叶子节点双向链表 → 范围查询沿链表扫描效率高。

---
