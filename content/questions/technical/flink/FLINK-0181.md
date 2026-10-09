---
id: FLINK-0181
type: technical
question: Flink的故障恢复机制的实现细节。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

从 checkpoint 恢复状态，source 重放。

# 参考回答

故障恢复是从最近 checkpoint 加载状态，source 从保存的 offset 重放，sink 用幂等或两阶段提交保证一致。整个过程自动完成。

# 追问

- 恢复期间数据会丢吗？
