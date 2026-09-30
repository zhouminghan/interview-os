---
id: SPARK-0374
type: technical
question: Apache Spark 分布式应用的核心组件？
difficulty: 0
topic: []
source_type: knowledge
---

1. **Spark Driver**
2. **SparkContext**
3. **Cluster Manager**
4. **Executor (Worker Node)**
5. **Task**（分配给 Executor 的工作单元）
6. **Job**（由多个 Task 组成的计算）
7. **Stage**（Job 的细分阶段，由 Shuffle 边界划分）
8. **DAG Scheduler**（将逻辑执行计划转换为物理执行计划）
