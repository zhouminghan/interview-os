---
id: STARROCKS-0054
type: technical
question: StarRocks 的密码策略如何配置？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

可配置密码复杂度、有效期和失败锁定策略。

# 参考回答

StarRocks 支持配置密码复杂度要求、有效期、连续失败锁定这些策略，防止弱密码和暴力破解。生产环境一般强制复杂密码加定期更换。

# 追问

- 密码锁定后怎么解锁？
