---
id: SPARK-0074
type: technical
question: 什么是Spark的RPC系统？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 Netty 做节点间通信。

# 参考回答

Spark 用 Netty 做 RPC，负责 Driver 和 Executor 之间的消息传递、任务下发和状态上报。RPC 稳定性直接影响任务调度。

# 追问

- RPC 超时会怎样？
