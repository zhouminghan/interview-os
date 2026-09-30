---
id: STORAGE-0778
type: technical
question: 严格模式（strict mode）的作用
difficulty: 0
topic: []
source_type: knowledge
---

`SET hive.mapred.mode=strict` 启用严格模式，禁止：
- 查询没有 WHERE 条件的分区表
- ORDER BY 不带 LIMIT
- 笛卡尔积
