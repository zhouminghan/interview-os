---
id: STARROCKS-0080
type: technical
question: StarRocks 中常见的性能瓶颈是什么？如何解决？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

瓶颈多在数据倾斜、慢 JOIN、统计信息过期、扫描量过大。

# 参考回答

常见瓶颈：数据倾斜导致少数 BE 慢、大表 JOIN 选错策略、统计信息过期导致计划差、扫描量过大。解法分别是分桶设计、join 策略、更新统计信息、加分区裁剪和索引。

# 追问

- 数据倾斜怎么定位？
