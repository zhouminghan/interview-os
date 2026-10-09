---
id: STORAGE-0134
type: technical
question: 如何优化Hive的分区设计？请详细说明分区设计的原则、策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区字段选高频过滤，粒度别太细。

# 参考回答

分区字段选查询最常过滤的，一般是时间。粒度按业务定，太细小文件多，太粗裁剪效果差。分区数量适中，配合生命周期管理。

# 追问

- 分区太细有什么问题？
