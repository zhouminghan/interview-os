---
id: FLINK-0151
type: technical
question: 如何优化Flink UDF（用户自定义函数）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

减少开销、用内置函数、避免频繁外部调用。

# 参考回答

UDF 优化减少每条的调用开销，能用内置函数就别写 UDF，避免 UDF 里做外部调用。复杂逻辑考虑用 ProcessFunction 加状态。

# 追问

- UDF 里调外部系统有什么问题？
