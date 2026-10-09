---
id: FLINK-0339
type: technical
question: 解释FlinkSQL的任务提交过程及其生命周期。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提交、生成执行图、调度、运行、结束或取消。

# 参考回答

任务提交后 Dispatcher 接收，生成 JobGraph，JobManager 转 ExecutionGraph 调度到 TaskManager 执行。生命周期就是提交、运行、失败重启、完成或取消。

# 追问

- JobGraph 和 ExecutionGraph 区别？
