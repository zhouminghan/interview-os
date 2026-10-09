---
id: STARROCKS-0107
type: technical
question: 如何设计 StarRocks 中的分区键？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分区键选高频过滤字段，通常是时间。

# 参考回答

分区键一般选查询里最常过滤的字段，绝大多数是时间。粒度按业务定，天级最常见。原则是让查询能靠分区裁剪只扫相关分区。

# 追问

- 分区键和分桶键怎么配合？
