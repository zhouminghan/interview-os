---
id: SPARK-0075
type: technical
question: Spark的安全机制包括哪些方面？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

认证、授权、加密、审计几块。

# 参考回答

Spark 安全包括 Kerberos 认证、权限授权、数据传输加密、审计日志。生产上配合 YARN 或 K8s 的安全体系，再加 Spark 自己的 ACL。

# 追问

- Kerberos 认证是什么？
