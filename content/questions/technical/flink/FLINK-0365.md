---
id: FLINK-0365
type: technical
question: 解释FlinkSQL中的Window Join概念及其与Interval Join的关系。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Window Join 按窗口关联，Interval Join 按时间范围关联。

# 参考回答

Window Join 是先把两边数据放进同样的时间窗口，再在窗口内 join；Interval Join 是按两事件的时间差范围关联。两者都依赖事件时间和 watermark。

# 追问

- 两者怎么选？
