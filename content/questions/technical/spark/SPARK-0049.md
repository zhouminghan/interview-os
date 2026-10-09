---
id: SPARK-0049
type: technical
question: 解释Spark的架构，包括Driver和Executor的作用。
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Driver 管调度和主逻辑，Executor 管计算和存数据。

# 参考回答

Driver 是主节点，解析程序、生成 DAG、分配任务；Executor 是工作节点，执行 task、缓存数据、返回结果。一个应用一个 Driver，多个 Executor 并行干活。

# 追问

- Driver 挂了会怎样？
