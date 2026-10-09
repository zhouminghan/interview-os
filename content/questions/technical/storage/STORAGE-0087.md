---
id: STORAGE-0087
type: technical
question: 什么是Hive的RENAME语句？它和ALTER TABLE RENAME有什么区别？在什么场景下应该使用RENAME？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

RENAME 就是改表名，用 ALTER TABLE RENAME。

# 参考回答

改表名用 ALTER TABLE 旧名 RENAME TO 新名。场景是表名要规范调整，或删表前先改名观察下游反应。改名只改元数据，不动数据。

# 追问

- 改名影响数据吗？
