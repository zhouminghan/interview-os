---
id: FLINK-0096
type: technical
question: Flink CEP支持哪些模式操作（连续、可选、重复等）？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

连续、可选、重复、分组等。

# 参考回答

CEP 模式操作有 next 严格连续、followedBy 宽松连续、optional 可选、oneOrMore 和 times 重复、group 分组。组合起来表达复杂事件规则。

# 追问

- next 和 followedBy 区别？
