---
id: STORAGE-0223
type: technical
question: 如何规划Hive的容量？请详细说明容量规划的步骤、方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

数据量、并发、增长综合估算。

# 参考回答

容量规划先盘点数据量和增长、查询并发和峰值，再估算存储、计算、内存。留 30% 余量，定期复盘调整。

# 追问

- 为什么留余量？
