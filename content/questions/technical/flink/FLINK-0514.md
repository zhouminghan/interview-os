---
id: FLINK-0514
type: technical
question: Flink 中有哪些窗口？
difficulty: 0
topic: []
source_type: knowledge
---

Flink 支持两种划分窗口的方式：按时间和按计数。Session 也是一种时间窗口。

- **滚动计数窗口（Tumbling Count Window）**：达到某一数量时执行计算，不重叠
- **滑动时间窗口（Sliding Time Window）**：达到某一时间段时滚动，可以重叠，通常用于计算最近的需求，例如最近 5 分钟
- **滚动时间窗口（Tumbling Time Window）**：达到某一时间段时滑动，可以看作是诺基亚滑盖手机，实际上是一个微批
- **滑动计数窗口（Sliding Count Window）**：达到某一数量时滑动
- **会话窗口（Session Window）**：窗口数据没有固定大小，根据用户传入的参数划分，窗口数据不重叠。类似于在用户退出时计算其之前的行为

---
