---
id: STARROCKS-0169
type: technical
question: 如何使用 Flink 将数据导入 StarRocks？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Flink Connector 流式写入 StarRocks。

# 参考回答

Flink Connector 支持把实时流数据直接 sink 到 StarRocks，配合主键模型 upsert，是实时数仓的标准写法。注意反压和批量提交调优。

# 追问

- Flink 写 StarRocks 怎么调优？
