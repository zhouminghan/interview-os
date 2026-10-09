---
id: FLINK-0106
type: technical
question: Flink作业提交的流程是怎样的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

客户端提交到 Dispatcher，生成作业图调度执行。

# 参考回答

作业提交是客户端打包上传，Dispatcher 接收后生成 JobGraph，JobManager 转成 ExecutionGraph，调度到 TaskManager 执行。

# 追问

- JobGraph 和 ExecutionGraph 的区别？
