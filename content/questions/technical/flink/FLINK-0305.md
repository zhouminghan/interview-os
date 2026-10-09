---
id: FLINK-0305
type: technical
question: 解释FlinkSQL中的Regular Join和Interval Join的区别及各自优缺点。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

regular 无时间限制状态大，interval 有时间范围状态可控。

# 参考回答

Regular Join 不限时间，两边状态会一直涨，要配 TTL；Interval Join 限定时间窗口，状态能按时间清理。能用 interval 就用 interval，状态更可控。

# 追问

- regular join 状态怎么控制？
