---
id: SPARK-0206
type: technical
question: 如何优化Spark的filter操作？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

filter 尽早做，放 join 和聚合前。

# 参考回答

filter 越早做越好，在 join、groupBy 前把数据过滤掉，后面要处理的数据就少了。这就是谓词下推的收益。

# 追问

- 为什么 filter 要前置？
