---
id: FLINK-0233
type: technical
question: 如何在FlinkSQL中定义滚动窗口(Tumbling Window)和配置其属性？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 TUMBLE 函数加窗口大小。

# 参考回答

滚动窗口用 TUMBLE(时间列, INTERVAL) 定义，比如 TUMBLE(ts, INTERVAL '5' MINUTE)。窗口不重叠，按固定大小切分。

# 追问

- 滚动窗口怎么配时间属性？
