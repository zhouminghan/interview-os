---
id: STARROCKS-0083
type: technical
question: 如何优化 StarRocks 的资源使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

存算分离按需伸缩，资源组隔离，物化视图降计算。

# 参考回答

资源优化就是别浪费也别不够。存算分离可以按需扩缩，资源组给不同业务分配额，物化视图减少重复计算。还要定期清理冷数据。

# 追问

- 冷数据怎么处理？
