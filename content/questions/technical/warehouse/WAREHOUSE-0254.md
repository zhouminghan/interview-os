---
id: WAREHOUSE-0254
type: technical
question: 星型模型与雪花模型的区别？
difficulty: 0
topic: []
source_type: knowledge
---

**掌握程度**：⬜

**答案要点**：
- 星型模型：事实表 + 一级维度表（冗余，查询快，JOIN 少）
- 雪花模型：事实表 + 多级维度表（规范化，JOIN 多）
- 互联网场景大多选星型模型，空间换时间

> 📖 来源：字节国际化数开一面

---
