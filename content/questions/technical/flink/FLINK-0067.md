---
id: FLINK-0067
type: technical
question: Flink如何保证精确一次（Exactly-Once）语义？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

checkpoint 加可重放 source 加事务性 sink。

# 参考回答

Exactly-once 靠三块：checkpoint 保证状态一致，source 能重放，sink 用两阶段提交或幂等写。三者配合，故障恢复后既不丢也不重。端到端 exactly-once 要看 sink 支不支持。

# 追问

- 两阶段提交是什么？
