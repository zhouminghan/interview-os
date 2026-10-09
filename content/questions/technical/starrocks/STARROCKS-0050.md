---
id: STARROCKS-0050
type: technical
question: 如何配置 StarRocks 的 SSL/TLS？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置证书开启加密连接，保证传输安全。

# 参考回答

StarRocks 支持配置 SSL/TLS 来加密客户端和 FE、BE 之间的连接，需要生成证书并在配置里开启。主要用于跨网络访问时防止数据被窃听。企业内部一般内网加白名单，外部访问才开 SSL。

# 追问

- SSL 会带来多大性能开销？
