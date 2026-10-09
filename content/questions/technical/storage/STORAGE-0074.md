---
id: STORAGE-0074
type: technical
question: 什么是Hive的查询缓存？请详细说明查询缓存的原理、配置方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Hive 本身查询缓存能力有限。

# 参考回答

Hive 原生查询缓存能力弱，主要靠 LLAP 或外部缓存层加速。常见做法是把高频结果物化或放 OLAP 引擎。Hive 定位是离线批，不强调查询缓存。

# 追问

- 高频查询怎么加速？
