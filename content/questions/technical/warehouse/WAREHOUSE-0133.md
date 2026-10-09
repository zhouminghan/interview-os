---
id: WAREHOUSE-0133
type: technical
question: 描述一次你处理数据仓库安全问题的经历。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

安全核心是数据分级、脱敏、权限最小化，敏感字段不下发。

# 参考回答

我遇到过手机号、身份证这类敏感字段，处理方式是先做数据分级，PII 字段在数仓里脱敏存储，比如打码或加密；下游取数按角色授权，最小权限原则，敏感数据不直接暴露。再加审计日志，谁查了什么能追溯。

# 追问

- 脱敏有哪些常见方式？
- 数据分级一般分几级？
