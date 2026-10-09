---
id: FLINK-0273
type: technical
question: FlinkSQL中如何处理时间字段的格式转换？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 DATE_FORMAT、TO_TIMESTAMP 等函数。

# 参考回答

时间格式转换用 DATE_FORMAT 格式化输出，TO_TIMESTAMP 解析字符串成时间。注意格式串要匹配。

# 追问

- 字符串转时间用哪个函数？
