---
id: FLINK-0351
type: technical
question: 解释FlinkSQL中的端到端一致性错误及处理方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

一致性错误常见重复或丢失，靠 source 重放和 sink 幂等。

# 参考回答

端到端一致性错误要么重复要么丢失。处理靠 source 可重放、checkpoint 存 offset、sink 幂等或两阶段提交。对账发现不一致就回放重算。

# 追问

- 怎么发现一致性错误？
