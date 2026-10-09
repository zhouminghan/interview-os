---
id: FLINK-0234
type: technical
question: 如何在FlinkSQL中定义滑动窗口(Sliding Window)和配置其属性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 HOP 函数加窗口大小和滑动步长。

# 参考回答

滑动窗口用 HOP(时间列, 滑动步长, 窗口大小) 定义。窗口有重叠，步长小于窗口大小。适合需要连续滚动的统计。

# 追问

- 滑动窗口什么时候重叠？
