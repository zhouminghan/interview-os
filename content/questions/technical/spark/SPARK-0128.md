---
id: SPARK-0128
type: technical
question: 什么是Spark SQL的分区剪裁？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只扫 where 条件命中的分区。

# 参考回答

分区剪裁是根据分区字段的过滤条件，只扫描命中的分区，跳过无关分区。前提是表有分区且过滤条件用到了分区字段。

# 追问

- 分区剪裁生效的条件是什么？
