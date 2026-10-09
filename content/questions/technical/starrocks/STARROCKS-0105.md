---
id: STARROCKS-0105
type: technical
question: StarRocks 集群网络问题如何排查？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看节点连通性、端口、防火墙、丢包。

# 参考回答

网络问题先 ping 和 telnet 看节点连通性，检查端口是否开放、防火墙白名单、DNS 解析，再看有没有丢包和延迟。FE 和 BE 之间网络不稳定会直接影响查询。

# 追问

- FE 和 BE 之间要开哪些端口？
