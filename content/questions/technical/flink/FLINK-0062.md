---
id: FLINK-0062
type: technical
question: Flink状态恢复的过程是怎样的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从 checkpoint 或 savepoint 恢复状态和 offset。

# 参考回答

状态恢复就是从 checkpoint 或 savepoint 里加载状态快照和消费位点，重新启动任务从上次位置继续。恢复耗时取决于状态大小和存储位置。

# 追问

- checkpoint 和 savepoint 恢复有区别吗？
