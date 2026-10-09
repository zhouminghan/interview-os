---
id: FLINK-0302
type: technical
question: 解释FlinkSQL中的LEFT JOIN、RIGHT JOIN和FULL OUTER JOIN的区别及使用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

左连接保留左表全部，右连接反之，全外连接两边都保留。

# 参考回答

LEFT JOIN 保留左表全部记录，右表没匹配就填 null；RIGHT JOIN 反过来；FULL OUTER JOIN 两边都保留。流式里都靠状态实现，状态管理和 TTL 是重点。

# 追问

- 外连接在流里状态更大吗？
