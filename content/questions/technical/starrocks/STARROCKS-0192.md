---
id: STARROCKS-0192
type: technical
question: StarRocks 中按时间序列查询的优化技巧？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

时间分区加排序键放时间，范围查询裁剪。

# 参考回答

时间序列查询优化核心是时间分区，加上排序键按时间排，范围查询只扫一段。还可以按设备分桶并行。避免全表扫时间范围。

# 追问

- 时间范围查询为什么快？
