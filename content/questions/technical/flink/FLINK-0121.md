---
id: FLINK-0121
type: technical
question: 如何处理热点分区（Hot Partition）问题？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

加盐打散、局部聚合、分散热点 key。

# 参考回答

热点分区就是某个 key 数据特别多，用加盐打散、局部预聚合、自定义分区器分散。跟数据倾斜处理类似。

# 追问

- 热点和倾斜是一回事吗？
