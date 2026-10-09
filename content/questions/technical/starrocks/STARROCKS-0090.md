---
id: STARROCKS-0090
type: technical
question: 如何扩展 StarRocks 集群？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加 BE 节点并重新均衡数据，FE 加节点提容灾。

# 参考回答

扩容主要是加 BE 节点，新节点加入后数据会重新均衡；BE 一般无损横向扩。FE 也可以加，提升高可用。存算分离下扩计算更灵活。

# 追问

- 扩容会中断服务吗？
