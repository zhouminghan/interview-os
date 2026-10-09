---
id: STORAGE-0288
type: technical
question: HBase的负载均衡器是如何工作的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定期把 Region 从负载高的迁到低的。

# 参考回答

负载均衡器定期运行，计算各 RegionServer 的 Region 数和负载，把 Region 从高负载迁到低负载，保持均衡。有不同策略，按需配置。

# 追问

- 均衡频率怎么定？
