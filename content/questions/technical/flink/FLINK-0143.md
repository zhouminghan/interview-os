---
id: FLINK-0143
type: technical
question: Flink如何应用在实时搜索系统中？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实时更新索引，支撑搜索。

# 参考回答

实时搜索用 Flink 把数据变化实时写到搜索索引，比如 ES，保证搜索结果实时性。Flink 负责实时索引更新。

# 追问

- 搜索索引为什么用 Flink 更新？
