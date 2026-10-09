---
id: STARROCKS-0028
type: technical
question: StarRocks 的分区策略有哪些？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

常用时间 Range 分区，也支持 List 分区。

# 参考回答

最常见是按时间做 Range 分区，方便按天删数据和裁剪；也支持 List 分区按枚举值。设计原则是分区字段选最常过滤的，尤其是时间。分区能让查询只扫相关分区。

# 追问

- 分区和分桶有什么区别？
