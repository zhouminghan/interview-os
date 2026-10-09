---
id: FLINK-0074
type: technical
question: Flink中的窗口类型有哪些？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

滚动、滑动、会话、全局窗口。

# 参考回答

窗口有滚动窗口固定大小不重叠、滑动窗口有步长、会话窗口按活跃间隔、全局窗口所有数据一个窗口。窗口把无限流切成有限块做计算。

# 追问

- 全局窗口什么时候用？
