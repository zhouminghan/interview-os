---
id: SPARK-0069
type: technical
question: Spark的日志系统是如何工作的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Driver 和 Executor 各自记日志，用 log4j 管理。

# 参考回答

Spark 日志分 Driver 和 Executor，用 log4j 配置。排查时 Driver 日志看调度和主逻辑，Executor 日志看 task 执行和报错。

# 追问

- 排查 task 失败看哪个日志？
