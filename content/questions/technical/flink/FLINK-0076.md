---
id: FLINK-0076
type: technical
question: 如何自定义窗口分配器（WindowAssigner）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 WindowAssigner 实现窗口分配逻辑。

# 参考回答

自定义窗口分配器要继承 WindowAssigner，实现 assignWindows 决定每条数据进哪些窗口，以及触发器等。一般内置窗口够用，特殊窗口语义才自定义。

# 追问

- 自定义分配器要实现什么？
