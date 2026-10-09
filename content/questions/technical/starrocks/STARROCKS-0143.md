---
id: STARROCKS-0143
type: technical
question: StarRocks 如何支持实时分析？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时导入加主键模型，秒级可见再加高频查询。

# 参考回答

实时分析靠 Routine Load 或 Flink 实时导入，配合主键模型 upsert，数据秒级可查。查询层靠列存加向量化保证快。典型就是实时大屏和实时监控。

# 追问

- 实时大屏的典型架构？
