---
id: STARROCKS-0178
type: technical
question: 如何从 Hive 迁移数据到 StarRocks？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Broker Load 从 HDFS 导入，建表映射分区。

# 参考回答

Hive 数据直接落在 HDFS，用 Broker Load 批量导入 StarRocks，分区、分桶重新设计。也可以先建 Hive 外表查，再逐步导入热数据。

# 追问

- 先外表再导入的策略？
