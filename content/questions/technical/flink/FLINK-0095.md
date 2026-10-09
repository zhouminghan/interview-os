---
id: FLINK-0095
type: technical
question: 如何使用Flink CEP检测模式？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定义 Pattern，用 CEP.pattern 匹配。

# 参考回答

CEP 检测模式是先定义 Pattern，比如 begin 开始、next 紧跟、where 条件，再 CEP.pattern 对数据流匹配，用 select 输出匹配结果。

# 追问

- Pattern 怎么定义？
