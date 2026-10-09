---
id: STARROCKS-0115
type: technical
question: StarRocks 中的物化视图设计最佳实践是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

覆盖高频聚合、维度固定、刷新频率按业务。

# 参考回答

物化视图要针对高频、维度相对固定的聚合查询来建，别建太多。刷新频率按业务时效定，实时性要求高就异步刷新调快，但要权衡资源。

# 追问

- 物化视图建太多会怎样？
