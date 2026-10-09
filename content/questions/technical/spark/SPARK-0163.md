---
id: SPARK-0163
type: technical
question: Spark Streaming的检查点目录如何配置？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 ssc.checkpoint 指定可靠存储目录。

# 参考回答

检查点目录用 ssc.checkpoint 配置，要指向可靠存储比如 HDFS。有状态操作必须配，不然恢复不了。目录要长期保留。

# 追问

- 为什么 checkpoint 要放可靠存储？
