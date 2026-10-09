---
id: STARROCKS-0157
type: technical
question: StarRocks 与其他分析数据库的性能对比如何？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

各有优势，StarRocks 在多表 join、实时更新上强。

# 参考回答

对比 ClickHouse、Doris 这些，StarRocks 优势在多表 join、主键实时更新、存算分离；ClickHouse 单表聚合极快但 join 弱。选型看业务是偏宽表聚合还是多表关联。

# 追问

- ClickHouse 为什么 join 弱？
