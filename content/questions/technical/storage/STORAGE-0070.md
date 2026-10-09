---
id: STORAGE-0070
type: technical
question: 解释一下Hive的查询优化策略。请详细说明各种优化策略的原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

谓词下推、列裁剪、MapJoin、倾斜优化。

# 参考回答

优化策略有谓词下推、列裁剪、MapJoin、并行执行、倾斜优化、CBO。核心是少读数据、少 shuffle。先看执行计划再针对性优化。

# 追问

- 优化第一步做什么？
