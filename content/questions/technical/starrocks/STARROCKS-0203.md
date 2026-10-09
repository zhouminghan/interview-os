---
id: STARROCKS-0203
type: technical
question: StarRocks 在实时大屏展示中的应用案例？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 或 Routine Load 实时写入，秒级刷新大屏。

# 参考回答

实时大屏链路是数据实时写入 StarRocks，前端定时查询秒级刷新。核心是导入延迟低、查询快，配合主键模型保证最新状态。

# 追问

- 大屏刷新频率怎么定？
