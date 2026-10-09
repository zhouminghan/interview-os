---
id: FLINK-0146
type: technical
question: Flink作业的调试技巧有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

本地跑、看日志、用 UI、简化数据复现。

# 参考回答

调试先在本地小数据跑，看日志和 Flink UI，用 print 或写文件看中间结果，简化输入复现问题。线上问题看日志和 checkpoint。

# 追问

- 线上问题怎么调试？
