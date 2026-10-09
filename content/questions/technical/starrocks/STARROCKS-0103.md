---
id: STARROCKS-0103
type: technical
question: StarRocks 磁盘空间不足如何处理？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

清理冷数据、缩副本、扩盘或加节点。

# 参考回答

磁盘不够先清理过期分区和冷数据，缩副本数或转存算分离，再扩盘加节点。要配磁盘水位告警，提前发现。

# 追问

- 怎么设置磁盘水位告警？
