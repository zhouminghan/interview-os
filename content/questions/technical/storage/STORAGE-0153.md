---
id: STORAGE-0153
type: technical
question: 如何优化Hive的分区裁剪？请详细说明分区裁剪的工作原理、配置方法和性能影响。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

查询带分区条件只扫相关分区。

# 参考回答

分区裁剪是 where 带分区字段，只扫命中分区。查询条件里一定要带分区字段，否则全表扫。是 Hive 最有效的优化。

# 追问

- 分区裁剪失效原因？
