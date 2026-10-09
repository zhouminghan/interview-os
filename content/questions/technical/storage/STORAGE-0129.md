---
id: STORAGE-0129
type: technical
question: 什么是Hive的MapJoin？请详细说明MapJoin的工作原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表加载进内存，map 端 join 免 shuffle。

# 参考回答

MapJoin 把小表加载到每个 map 的内存，join 在 map 端完成，避免 shuffle。配置自动 MapJoin 和阈值。适合大表 join 小表，性能提升明显。

# 追问

- 小表多大合适？
