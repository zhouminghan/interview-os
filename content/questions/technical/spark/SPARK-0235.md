---
id: SPARK-0235
type: technical
question: 什么是Spark Job Server？它的主要功能是什么？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提供 REST 接口提交管理 Spark 作业。

# 参考回答

Job Server 是第三方组件，用 REST 接口提交和管理 Spark 作业，支持作业复用上下文。现在用得少了，被 Livy 或平台替代。

# 追问

- Job Server 和 Livy 的区别？
