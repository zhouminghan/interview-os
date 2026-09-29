---
id: WAREHOUSE-0074
type: technical
question: Hive 数据分区和分桶的区别
topic: [warehouse, hive]
difficulty: 2
frequency: high
source_type: knowledge
---

# 一句话

分区按目录组织、用于裁剪；分桶按 hash 分文件、用于优化 join 和采样。

# 30 秒回答

分区按字段（常用日期）分目录，查询走分区裁剪；分桶按 hash 分固定数量文件，相同桶的两表 join 可避免 shuffle（Bucket Map Join）。

# 追问

- 分区和分桶各有什么代价？
- 什么字段适合分桶？
