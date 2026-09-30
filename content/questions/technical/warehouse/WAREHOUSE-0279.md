---
id: WAREHOUSE-0279
type: technical
question: 什么是 SCD（缓慢变化维度）？
difficulty: 0
topic: []
source_type: knowledge
---

SCD 描述如何处理维度属性随时间的变化（例如用户变更地址）。

| 类型 | 策略 | 场景 |
|------|------|------|
| **Type 1** | 直接覆盖 | 不需要历史 |
| **Type 2** | 多行 + 有效日期追踪 | 保留历史（最常用） |
| **Type 3** | 额外列保留有限历史 | 只需上一次变化 |
