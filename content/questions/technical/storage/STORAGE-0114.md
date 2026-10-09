---
id: STORAGE-0114
type: technical
question: Hive中的视图如何创建和使用？请详细说明视图的类型、创建方法、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CREATE VIEW 定义逻辑视图。

# 参考回答

视图用 CREATE VIEW 定义查询，查视图就是查底层查询。适合封装复杂逻辑、控制暴露的字段。注意视图不存数据，每次现算。

# 追问

- 视图和表怎么选？
