---
id: STORAGE-0130
type: technical
question: 如何优化Hive的GROUP BY操作？请详细说明GROUP BY优化的各种策略和具体实现方法。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提前过滤、预聚合、处理倾斜。

# 参考回答

GROUP BY 优化先 filter 减数据，开启 map 端预聚合，处理热点 key 倾斜。分组基数太高会慢，能近似就近似。

# 追问

- map 端预聚合是什么？
