---
id: STORAGE-0044
type: technical
question: Hive中的数据类型有哪些？请详细说明各种数据类型的特点、使用场景和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

基础类型、复杂类型两大类。

# 参考回答

基础类型有整型、字符串、小数、时间、布尔；复杂类型有 array、map、struct。注意隐式类型转换，decimal 精度，string 和 varchar 区别。复杂类型少用，解析慢。

# 追问

- string 和 varchar 区别？
