---
id: FLINK-0056
type: technical
question: Flink中的ValueState、ListState、MapState分别是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

单值、列表、映射三种 Keyed State 类型。

# 参考回答

ValueState 存单个值，ListState 存列表，MapState 存键值对。选型看状态结构：一个值用 Value，多条用 List，按 key 查用 Map。MapState 遍历效率比 List 好。

# 追问

- 状态类型怎么选？
