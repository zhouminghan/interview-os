---
id: FLINK-0075
type: technical
question: 解释滚动窗口、滑动窗口和会话窗口的区别。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

滚动不重叠，滑动有重叠，会话按活跃间隔。

# 参考回答

滚动窗口固定大小、不重叠；滑动窗口固定大小加滑动步长，可能重叠；会话窗口按数据活跃间隔动态切分，没有固定长度。选型看业务统计的时间粒度。

# 追问

- 会话窗口适合什么场景？
