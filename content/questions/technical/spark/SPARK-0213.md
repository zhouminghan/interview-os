---
id: SPARK-0213
type: technical
question: 如何优化Spark的数据倾斜问题？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加盐打散、两阶段聚合、小表广播。

# 参考回答

数据倾斜用加盐打散热点 key、两阶段聚合、大表 join 小表广播、开 AQE skew join。先定位倾斜 key 再处理。

# 追问

- 怎么定位倾斜 key？
