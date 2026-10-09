---
id: STORAGE-0356
type: technical
question: HBase的负载均衡优化方案有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

合理 Region 数和均衡策略。

# 参考回答

负载均衡优化靠合理 Region 数、预分区、均衡器策略。避免 Region 分布不均。均衡器定期运行，迁移 Region 均衡负载。

# 追问

- 负载不均怎么发现？
