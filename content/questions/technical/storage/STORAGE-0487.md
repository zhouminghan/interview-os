---
id: STORAGE-0487
type: technical
question: 写出计算用户留存率的SQL查询。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

次日留存是首日用户次日还活跃的比例。

# 参考回答

留存率用首日活跃用户 join 次日活跃用户，留存人数除以首日人数。SQL 里按用户和日期关联计算，用窗口或 join。

# 追问

- 留存怎么算？
