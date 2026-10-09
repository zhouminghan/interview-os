---
id: FLINK-0275
type: technical
question: 解释FlinkSQL中的一致性语义(Exactly-once, At-least-once)及如何配置。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配 checkpoint 和 sink 决定一致性。

# 参考回答

一致性语义靠 checkpoint 加 sink 类型，exactly-once 需要两阶段提交的 sink。默认 checkpoint 保证 at-least-once 到 exactly-once。

# 追问

- exactly-once 依赖什么？
