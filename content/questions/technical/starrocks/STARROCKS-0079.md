---
id: STARROCKS-0079
type: technical
question: 如何合理设计 StarRocks 的分区策略？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区键选时间等高频过滤字段，控制分区粒度别太细。

# 参考回答

分区一般按时间，粒度按查询和生命周期定，比如按天还是按月。原则是分区字段一定是查询里最常过滤的，分区数别太多，不然元数据开销大。

# 追问

- 分区太细会有什么问题？
