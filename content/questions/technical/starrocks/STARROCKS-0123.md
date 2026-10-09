---
id: STARROCKS-0123
type: technical
question: StarRocks 如何支持复杂的统计分析？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持窗口函数、多维聚合、近似计算等统计能力。

# 参考回答

StarRocks 能做窗口函数、cube、rollup、分组聚合、bitmap 和 hll 近似计算这些统计分析。复杂统计模型它不擅长，那是统计工具的事。

# 追问

- 近似计算什么时候用？
