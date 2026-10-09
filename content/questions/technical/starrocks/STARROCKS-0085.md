---
id: STARROCKS-0085
type: technical
question: 如何诊断 StarRocks 集群性能问题？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看监控指标、慢查询、执行计划、日志逐层定位。

# 参考回答

诊断性能先看集群监控，CPU、内存、磁盘 IO、QPS；再定位慢查询，看执行计划；结合 BE 日志和 tablet 分布。逐层排除是计算瓶颈、IO 瓶颈还是倾斜。

# 追问

- 怎么区分计算瓶颈和 IO 瓶颈？
