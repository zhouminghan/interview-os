---
id: SPARK-0310
type: technical
question: Spark 执行任务流程？Stage 怎么划分？（高频⭐⭐⭐）
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：腾讯-数据工程-20260415 Q7/Q8、美团-大数据开发-20260415 Q12

Driver 解析代码 → 生成逻辑计划 → DAGScheduler 根据**宽依赖（Shuffle Dependency）**划分 Stage → TaskScheduler 把 Stage 拆成 Task 分发到 Executor。

从最终 RDD 往前回溯，遇到宽依赖切一刀。最后一个 Stage 是 ResultStage，前面的是 ShuffleMapStage。窄依赖可 Pipeline 执行。

---
