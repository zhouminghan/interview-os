---
id: WAREHOUSE-0358
type: technical
question: 快排最好和最坏时间复杂度？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> 平均和最好都是 O(nlogn)（每次划分接近一半）；最坏如数组已有序、每次选到极值 Pivot，递归深度退化成 N，复杂度 O(n²)。工程上用随机选 Pivot / 三数取中降低最坏概率。

**💡 点评**：很多人答完不补"为什么会退化"，建议补一句。
