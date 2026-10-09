---
id: STARROCKS-0112
type: technical
question: 雪花模型在 StarRocks 中如何实现？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

雪花把维度表再拆细，但 StarRocks 里很少用。

# 参考回答

雪花模型就是维度表继续规范化拆成多层，StarRocks 里不推荐，因为列存加宽表更高效，join 越多越慢。一般用星型或直接大宽表。

# 追问

- 为什么列存下更倾向宽表？
