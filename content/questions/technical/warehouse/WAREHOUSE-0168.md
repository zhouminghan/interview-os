---
id: WAREHOUSE-0168
type: technical
question: 什么是代理键，什么时候应该用它？
difficulty: 0
topic: []
source_type: knowledge
---

**代理键**（surrogate key）是代替自然键使用的合成标识符。在以下场景很有用：
- 自然键不稳定
- 需要 SCD 历史记录
- 需要整合多个来源、各自键体系不同的数据

代理键还能在源键变更时保证连接的一致性。

---
