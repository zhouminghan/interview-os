---
id: FLINK-0141
type: technical
question: Flink在异常检测中的应用方案是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 CEP 和规则检测异常模式。

# 参考回答

异常检测用 Flink CEP 或规则引擎实时匹配异常模式，比如流量突增、连续失败，实时告警。

# 追问

- 异常检测和风控的区别？
