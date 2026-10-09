---
id: FLINK-0295
type: technical
question: 如何在FlinkSQL中实现优雅的作业取消和停止？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 cancel 取消，或先打 savepoint 再停。

# 参考回答

优雅停止一般先打一个 savepoint，再取消作业，这样状态和 offset 都保存了。直接 cancel 会丢状态。升级或迁移前都要先打 savepoint。

# 追问

- stop 和 cancel 有什么区别？
