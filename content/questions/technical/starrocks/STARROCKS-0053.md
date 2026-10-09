---
id: STARROCKS-0053
type: technical
question: 如何保护 StarRocks 集群安全？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

网络隔离、权限最小化、SSL、审计、密码策略多管齐下。

# 参考回答

保护集群主要几层：网络层用防火墙和白名单限制访问，账号层用最小权限和强密码策略，传输层开 SSL，再加审计日志和定期巡检。核心是默认拒绝、按需放行。

# 追问

- 生产环境的端口怎么管控？
