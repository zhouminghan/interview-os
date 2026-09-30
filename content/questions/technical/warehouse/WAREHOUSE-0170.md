---
id: WAREHOUSE-0170
type: technical
question: 什么是 SCD（缓慢变化维度）？
difficulty: 0
topic: []
source_type: knowledge
---

SCD 描述如何处理维度属性随时间的变化（例如用户变更地址）。
- **Type 1**：覆盖历史，不保留旧值
- **Type 2**：用多行和有效日期追踪历史
- **Type 3**：在额外列中保留有限的历史

选择取决于是否需要"时点"报表。

---
