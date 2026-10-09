---
id: SPARK-0104
type: technical
question: 如何对DataFrame进行过滤？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 filter 或 where 加条件过滤行。

# 参考回答

过滤用 filter 或 where，传条件表达式，支持 and、or、in、like 这些。过滤越早做越好，能减少后面要处理的数据量。

# 追问

- filter 和 where 有区别吗？
