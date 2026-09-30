---
id: FLINK-0622
type: technical
question: 如何处理数据倾斜？
difficulty: 0
topic: []
source_type: knowledge
---

- KeyBy 前加随机盐（salt）打散
- 两阶段聚合（局部 + 全局）
- 增大并行度
- 提高 `MiniBatch` 参数
