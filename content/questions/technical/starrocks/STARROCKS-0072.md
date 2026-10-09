---
id: STARROCKS-0072
type: technical
question: StarRocks 中的统计信息是什么？如何收集和使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

统计信息是表的数据分布信息，CBO 靠它估算成本。

# 参考回答

统计信息记录表的行数、基数、数据分布等，CBO 靠它估算执行计划成本。要定期收集，尤其数据大变更后，过期了会导致选错 join 顺序或方式，查询变慢。

# 追问

- 统计信息多久收集一次？
