---
id: STARROCKS-0130
type: technical
question: StarRocks 的元数据管理设计是怎样的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

元数据由 FE 管理，多副本保证高可用。

# 参考回答

元数据由 FE 统一管理，存表结构、分区、分桶、tablet 分布这些，FE 之间多副本同步保证高可用。元数据变了会同步给所有 FE 和 BE。

# 追问

- 元数据里都存哪些信息？
