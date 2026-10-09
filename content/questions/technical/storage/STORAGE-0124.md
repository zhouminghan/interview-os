---
id: STORAGE-0124
type: technical
question: 什么是Hive的查询性能优化？请详细说明查询性能优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

存储、SQL、配置、资源四层优化。

# 参考回答

性能优化从存储列式分区、SQL 少 join 少 shuffle、配置开向量化 CBO、资源合理分配。先定位瓶颈再针对性优化。

# 追问

- 四层怎么排序？
