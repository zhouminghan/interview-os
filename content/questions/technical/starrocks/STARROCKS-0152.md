---
id: STARROCKS-0152
type: technical
question: StarRocks 如何实现自动扩缩容？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠存算分离和监控指标触发加节点减节点。

# 参考回答

自动扩缩容主要靠存算分离，计算节点根据 CPU、内存、QPS 指标自动加减，存储单独扩容。K8s 加 Operator 能实现弹性伸缩，削峰填谷省成本。

# 追问

- 扩缩容的触发指标怎么定？
