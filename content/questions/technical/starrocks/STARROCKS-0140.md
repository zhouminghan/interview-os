---
id: STARROCKS-0140
type: technical
question: 什么是 Pipeline 执行模型？StarRocks 是如何实现的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Pipeline 把执行拆成流水线阶段，并行执行减少等待。

# 参考回答

Pipeline 执行模型把查询拆成多个流水线阶段，数据像流水线一样在阶段间流动，各阶段并行执行，减少 CPU 等待和中间物化。这是新一代执行引擎的常见设计。

# 追问

- Pipeline 和传统执行模型差在哪？
