---
id: WAREHOUSE-0132
type: technical
question: 请介绍一下你使用过的数据仓库工具或平台，并说明其优势。
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

常用 Hive 加 Spark 做离线加工，DolphinScheduler 做调度，Doris 或 ClickHouse 做查询。

# 参考回答

我主要用过 Hive 加 Spark 做离线加工，调度用 DolphinScheduler 或 DataWorks，实时用 Flink，查询层用 Doris、ClickHouse。选它们的理由是 Hive 和 Spark 生态成熟、适合离线批量，Doris 兼容 MySQL 协议、多维分析快，调度平台能管依赖和重跑。

# 追问

- DataWorks 和 DolphinScheduler 有什么区别？
- 为什么查询层要用 Doris 而不是直接查 Hive？
