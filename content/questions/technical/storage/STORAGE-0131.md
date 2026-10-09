---
id: STORAGE-0131
type: technical
question: 什么是Hive的并行执行？请详细说明并行执行的配置方法、使用场景和性能优化策略。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

无依赖 stage 并行跑。

# 参考回答

并行执行把无依赖的多个 stage 同时跑，减少总耗时。开启 parallel execution，适合多表 join、union。注意别抢资源。

# 追问

- 并行度怎么控？
