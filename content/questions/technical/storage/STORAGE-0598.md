---
id: STORAGE-0598
type: technical
question: 解释Clickhouse的字典更新策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定时刷新或手动重载。

# 参考回答

字典更新按时间定时刷新，或手动 SYSTEM RELOAD。缓存过期时间配置。按数据变更频率设刷新间隔。

# 追问

- 字典怎么刷新？
