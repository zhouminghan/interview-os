---
id: STORAGE-0054
type: technical
question: Hive中的动态分区裁剪是什么？请详细说明分区裁剪的原理、配置方法、使用场景和性能优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按过滤条件只扫相关分区。

# 参考回答

分区裁剪是根据 where 里的分区字段，只扫描命中的分区目录。配置开启，查询条件里要带分区字段才生效。是 Hive 减少扫描最重要的优化。

# 追问

- 分区裁剪失效的原因？
