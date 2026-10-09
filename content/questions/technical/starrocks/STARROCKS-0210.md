---
id: STARROCKS-0210
type: technical
question: StarRocks 如何改进其查询优化器？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CBO 更成熟、统计信息更准、更多改写规则。

# 参考回答

查询优化器在持续增强 CBO，统计信息更准，加更多查询改写规则，让执行计划更优。慢查询少了，很多靠优化器自动搞定。

# 追问

- CBO 为什么依赖统计信息？
