---
id: FLINK-0229
type: technical
question: FlinkSQL中的JOIN操作有哪几种类型？每种类型适用于什么场景？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

regular、interval、temporal join。

# 参考回答

Flink SQL 的 join 有 regular join、interval join、temporal join。regular 用状态持续匹配，interval 限时间范围，temporal 关联版本表。

# 追问

- 三种 join 分别什么场景？
