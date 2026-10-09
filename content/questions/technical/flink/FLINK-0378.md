---
id: FLINK-0378
type: technical
question: 如何使用FlinkSQL进行异常检测与告警系统开发？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用规则和模式匹配检测异常，触发告警。

# 参考回答

异常检测用 Flink SQL 的规则和 MATCH_RECOGNIZE 检测异常模式，比如流量突增、连续失败。检测到就输出告警事件，下游触发通知。

# 追问

- 告警怎么避免误报？
