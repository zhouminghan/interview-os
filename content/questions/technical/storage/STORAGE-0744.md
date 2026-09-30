---
id: STORAGE-0744
type: technical
question: Apache Hive 的主要局限性有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

- 不支持行级 INSERT/UPDATE/DELETE（不适合 OLTP）
- 查询延迟高（秒到分钟级）
- 不适合实时查询
- 小文件查询效率低
