---
id: SPARK-0058
type: technical
question: Spark的调度系统是如何工作的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

DAGScheduler 切 Stage，TaskScheduler 分 task 到 Executor。

# 参考回答

调度分两层：DAGScheduler 把 DAG 切成 Stage，TaskScheduler 把 task 分发到 Executor，还要考虑数据本地性。任务优先级、资源也在这里协调。

# 追问

- 数据本地性是什么？
