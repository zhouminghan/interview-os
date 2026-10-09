---
id: STORAGE-0071
type: technical
question: 什么是Hive的并行执行？请详细说明并行执行的原理、配置方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

无依赖的 stage 并行跑。

# 参考回答

并行执行把没有依赖关系的多个 stage 同时执行，减少总耗时。适合多表 join、union 场景。开启 parallel execution，注意别抢太多资源。

# 追问

- 并行度怎么控制？
