---
id: FLINK-0236
type: technical
question: 解释FlinkSQL中的窗口TVF(Table-Valued Functions)及其优势。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

窗口表值函数，更灵活地定义窗口。

# 参考回答

窗口 TVF 是把窗口作为表值函数，比如 TUMBLE、HOP、CUMULATE，返回窗口表。比老 Group Window 更灵活，能单独处理窗口元数据。

# 追问

- 窗口 TVF 和 Group Window 区别？
