---
id: STORAGE-0115
type: technical
question: 什么是Hive的物化视图？请详细说明物化视图的工作原理、创建方法、使用场景和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

物化视图预存结果，查询复用加速。

# 参考回答

物化视图把查询结果预先算好存下，查询命中直接复用，省去重复计算。要手动刷新，占存储。适合高频聚合结果。Hive 新版本支持。

# 追问

- 物化视图怎么刷新？
