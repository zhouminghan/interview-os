---
id: SPARK-0250
type: technical
question: Apache Spark 中有哪些安全选项？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 提供以下安全选项：
- **加密**：Apache Spark 支持通过 SSL 加密，可以使用 HTTPS 协议进行安全数据传输。使用 `spark.ssl` 参数设置 SSL 配置。
- **认证**：可以通过共享密钥在 Apache Spark 中执行认证，使用 `spark.authenticate` 配置认证。
- **事件日志**：如果使用事件日志，可以设置存储事件日志的目录的权限，这些权限可以确保事件日志的访问控制。

---
