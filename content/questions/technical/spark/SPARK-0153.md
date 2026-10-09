---
id: SPARK-0153
type: technical
question: Spark Streaming的窗口操作有哪些？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

window、reduceByWindow 等做滑动窗口统计。

# 参考回答

窗口操作有 window、reduceByKeyAndWindow、countByWindow，按窗口长度和滑动间隔算最近一段时间的聚合。适合近 N 分钟统计。

# 追问

- 窗口长度和滑动间隔是什么？
