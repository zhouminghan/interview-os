---
id: STARROCKS-0055
type: technical
question: StarRocks 的白名单功能如何使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

白名单限制哪些来源 IP 能访问集群。

# 参考回答

白名单就是配置允许访问的 IP 或网段，不在名单里的连接直接拒绝。一般配合内网隔离，只放业务网段或跳板机。这样能挡住来自公网的非法访问。

# 追问

- 白名单和防火墙的区别？
