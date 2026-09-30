---
id: SPARK-0398
type: technical
question: D. 宽依赖 vs 窄依赖
difficulty: 0
topic: []
source_type: knowledge
---

| 依赖 | Shuffle | 示例 |
|------|---------|------|
| 窄依赖 | 不需要 | map, filter, union |
| 宽依赖 | 需要 | groupByKey, reduceByKey, join |

宽依赖是 Stage 的边界。
