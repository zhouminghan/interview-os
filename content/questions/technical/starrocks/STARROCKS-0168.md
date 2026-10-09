---
id: STARROCKS-0168
type: technical
question: StarRocks 如何与 Spark 集成？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Spark 加工后用 Connector 或导出导入 StarRocks。

# 参考回答

用 Spark Connector 可以直接把 DataFrame 写进 StarRocks，也可以 Spark 算完落文件再用 Broker Load 导入。一般 Spark 负责重 ETL，StarRocks 负责查询。

# 追问

- Spark 和 StarRocks 的分工？
