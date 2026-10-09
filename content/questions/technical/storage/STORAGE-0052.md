---
id: STORAGE-0052
type: technical
question: 解释一下Hive的MapJoin优化。请详细说明MapJoin的工作原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MapJoin 把小表加载进内存，在 map 端 join。

# 参考回答

MapJoin 把小表加载到每个 map 的内存里，join 在 map 端完成，避免 shuffle。适合大表 join 小表。配置开启自动 MapJoin，设置小表阈值。

# 追问

- MapJoin 小表多大合适？
