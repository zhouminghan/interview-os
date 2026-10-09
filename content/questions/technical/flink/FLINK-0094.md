---
id: FLINK-0094
type: technical
question: 什么是复杂事件处理（CEP）？Flink CEP的主要特点是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从事件流里检测符合模式的事件序列。

# 参考回答

CEP 是复杂事件处理，从数据流里匹配事件序列模式，比如连续三次登录失败。Flink CEP 提供模式 API 和 NFA 状态机检测，适合风控、异常检测。

# 追问

- CEP 适合什么场景？
