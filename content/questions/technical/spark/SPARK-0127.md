---
id: SPARK-0127
type: technical
question: 什么是Spark SQL的列剪裁？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

只读查询用到的列，跳过无关列。

# 参考回答

列剪裁就是只扫描 select 和 where 里用到的列，其他列不读。列式存储天然支持，能大幅减少 IO。Spark SQL 会自动做。

# 追问

- 为什么列式存储能列剪裁？
