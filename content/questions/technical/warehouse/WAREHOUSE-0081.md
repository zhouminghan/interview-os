---
id: WAREHOUSE-0081
type: technical
question: 数仓调度削峰填谷怎么做
topic: [warehouse, scheduling]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

非核心任务错峰到白天，核心任务高优队列 + 资源隔离，优化 DAG 依赖。

# 30 秒回答

凌晨是调度高峰，把周/月报、历史回刷、探索任务错峰到白天；核心链路高优队列 + 独立资源；梳理 DAG 去不必要串行依赖改并行。

# 追问

- 队列怎么分级？
- 错峰会不会影响 SLA？
