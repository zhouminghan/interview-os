---
id: STARROCKS-0109
type: technical
question: StarRocks 中的复合键如何设计？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

复合键用多个列组成主键或排序键，顺序很关键。

# 参考回答

复合键就是多列组成的键，设计时列的顺序很重要，排前面的在索引里优先级高。一般把等值过滤、高区分度的列放前面。

# 追问

- 排序键列顺序怎么定？
