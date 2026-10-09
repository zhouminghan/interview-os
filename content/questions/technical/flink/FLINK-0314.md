---
id: FLINK-0314
type: technical
question: 如何处理FlinkSQL中的数据倾斜问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加盐打散、两阶段聚合、LocalGlobal 优化。

# 参考回答

SQL 数据倾斜用加盐打散热点 key、两阶段聚合，开 LocalGlobal 优化做本地预聚合。看子任务处理量分布定位倾斜，再针对热点 key 处理。

# 追问

- 加盐在 SQL 里怎么实现？
