---
id: SPARK-0052
type: technical
question: Spark应用程序的执行流程是怎样的？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提交任务到 Driver 生成 DAG，切 Stage 发 Executor 执行。

# 参考回答

应用提交后 Driver 解析代码生成 DAG，按宽窄依赖切成 Stage，再分成 task 发到各 Executor 并行执行，中间 shuffle 落盘，最后聚合返回结果。

# 追问

- 从提交到执行中间经过哪些步骤？
