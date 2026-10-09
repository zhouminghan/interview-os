---
id: STARROCKS-0021
type: technical
question: StarRocks 中的 FE（Frontend）和 BE（Backend）分别是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

FE 管元数据和查询计划，BE 管存储和计算。

# 参考回答

FE 相当于大脑，负责元数据、SQL 解析优化、生成执行计划；BE 相当于手脚，负责存数据、执行查询。一般 FE 三台保证高可用，BE 按数据量水平扩。

# 追问

- FE 挂了查询还能用吗？
