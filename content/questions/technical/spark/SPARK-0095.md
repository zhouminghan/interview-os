---
id: SPARK-0095
type: technical
question: RDD的行动操作有哪些常见类型？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

collect、count、take、reduce、save 等。

# 参考回答

行动操作触发计算，常见 collect 拉回、count 计数、take 取前几个、reduce 聚合、foreach 遍历、saveAsTextFile 保存。行动会真正执行整个 DAG。

# 追问

- collect 有什么风险？
