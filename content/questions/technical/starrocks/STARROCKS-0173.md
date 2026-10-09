---
id: STARROCKS-0173
type: technical
question: StarRocks 的 Hive 外表如何使用？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

建 Hive 外表映射 Hive 表，直接查询不导入。

# 参考回答

Hive 外表就是 StarRocks 里映射 Hive 表，元数据从 Hive Metastore 同步，查询时直接读 HDFS 上的数据。适合查询为主、不落地到 StarRocks 的场景。

# 追问

- Hive 外表查询慢吗？
