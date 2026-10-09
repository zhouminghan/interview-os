---
id: SPARK-0071
type: technical
question: Spark的动态资源分配机制是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按负载自动增减 Executor，节省资源。

# 参考回答

动态资源分配根据任务负载自动增减 Executor，空闲就释放，忙就申请。适合资源池共享的场景，配置开启后能省不少资源。

# 追问

- 动态资源分配适合什么场景？
