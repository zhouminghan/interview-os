---
id: WAREHOUSE-0158
type: technical
question: 数据仓库的数据建模过程中，通常使用哪种技术来识别数据冗余？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

识别数据冗余靠规范化，也就是范式分析。

# 参考回答

这题答案是规范化或范式分析，通过函数依赖分析把重复数据拆开，消除冗余。不过要注意，数仓里其实经常故意保留冗余，像星型模型的维度表就是反规范化，为了查询快。所以规范化更多用在业务库设计里。

# 追问

- 规范化有哪几范式？
- 数仓为什么反而要反规范化？
