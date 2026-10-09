---
id: STORAGE-0589
type: technical
question: 如何实现Clickhouse的多租户隔离？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按用户和库隔离，配额限流。

# 参考回答

多租户按用户或库隔离，配置配额和资源限制。不同租户不同库和权限。重要租户可独立集群。

# 追问

- 多租户怎么隔离？
