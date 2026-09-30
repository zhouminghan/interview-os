---
id: STORAGE-0653
type: technical
question: 运行 JOIN 查询时出现内存溢出错误如何解决？
difficulty: 0
topic: []
source_type: knowledge
---

在涉及大表的 JOIN 查询的情况下，内存中有大量数据，这可能导致内存溢出错误。处理此错误的一个简单解决方案是将 `RIGHT OUTER JOIN` 更改为 `LEFT OUTER JOIN`。应尝试将行数多的表放在 JOIN 查询的最右边。

---
