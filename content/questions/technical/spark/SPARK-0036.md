---
id: SPARK-0036
type: technical
question: Spark 任务和 Hadoop 哪些组件交互，怎么交互
topic: [spark, yarn, hdfs]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

Spark 与 YARN（资源调度）和 HDFS（数据读写）交互。

# 30 秒回答

提交：上传 jar 到 HDFS，向 YARN RM 申请；RM 在 NM 上启动 AM（Driver），AM 申请 Container 启动 Executor；Executor 从 HDFS 读数据、经 NM 上的 Shuffle Service 交换数据，结果写回 HDFS。

# 追问

- ApplicationMaster 和 Driver 关系？
- Shuffle Service 作用？
