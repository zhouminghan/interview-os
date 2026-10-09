---
id: STARROCKS-0066
type: technical
question: StarRocks 的 CBO（基于成本的优化器）是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CBO 根据统计信息估算成本，选最省的执行计划。

# 参考回答

CBO 就是基于成本的优化器，它靠表的统计信息估算不同 join 顺序、join 方式的代价，选成本最低的执行计划。所以统计信息准不准，直接决定 CBO 优化得好不好，慢查询经常要查统计信息是否过期。

# 追问

- 统计信息过期会有什么影响？
