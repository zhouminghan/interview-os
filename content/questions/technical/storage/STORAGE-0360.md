---
id: STORAGE-0360
type: technical
question: 如何优化HBase的安全配置？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按需开安全，平衡开销。

# 参考回答

安全配置优化按需开启认证、授权、加密，避免过度配置影响性能。Kerberos 和 Ranger 统一管理，最小权限。加密开销大，敏感数据才开。

# 追问

- 加密影响多大？
