---
id: FLINK-0371
type: technical
question: FlinkSQL中的JOIN语句与传统数据库JOIN的区别是什么？有哪些特有的流处理语义？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

流式 join 是持续匹配，受时间和状态影响。

# 参考回答

传统数据库 join 是静态数据一次匹配完；流式 join 数据持续到来，持续匹配，还引入事件时间、watermark、状态和乱序。这是流处理特有的语义。

# 追问

- 流式 join 有哪些额外语义？
