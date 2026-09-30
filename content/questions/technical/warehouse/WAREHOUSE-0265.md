---
id: WAREHOUSE-0265
type: technical
question: MySQL 索引结构，B+ 树与 B 树的区别
difficulty: 0
topic: []
source_type: knowledge
---

**掌握程度**：⬜

**答案要点**：
- B+ 树：非叶子节点只存索引 → 树矮 → IO 少；叶子节点链表 → 范围查询快
- B 树：所有节点存数据，树高，范围查询需中序遍历

> 📖 来源：字节国际化数开一面

---

## Java 基础
