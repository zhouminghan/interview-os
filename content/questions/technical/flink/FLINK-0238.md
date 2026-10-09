---
id: FLINK-0238
type: technical
question: 对比分析FlinkSQL中的Group Window和Window TVF的差异。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Group Window 老写法，TVF 新写法更灵活。

# 参考回答

Group Window 是老的窗口写法，嵌在 group by 里；Window TVF 是新的表值函数写法，把窗口独立出来，能做窗口 join 等更复杂的操作。

# 追问

- 为什么推荐 Window TVF？
