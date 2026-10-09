---
id: FLINK-0185
type: technical
question: 某银行如何应用Flink进行实时风控？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Flink 做实时规则和反欺诈拦截。

# 参考回答

银行用 Flink 实时分析交易流水，用规则引擎和 CEP 匹配欺诈模式，毫秒级拦截风险交易。强调低延迟和 exactly-once。

# 追问

- 风控为什么强调低延迟？
