---
id: STORAGE-0051
type: technical
question: Hive中的并行执行是如何实现的？请详细说明并行执行的原理、配置方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

并行执行把无依赖的 stage 同时跑。

# 参考回答

Hive 并行执行把没有依赖关系的多个 stage 同时执行，减少总耗时。配置开启 parallel execution，适合多表 join 或 union 场景。别开太多，会抢资源。

# 追问

- 并行执行的代价？
