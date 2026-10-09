---
id: FLINK-0364
type: technical
question: 在FlinkSQL中如何优化大表JOIN小表的性能？详细说明Broadcast Join的原理。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

小表广播到各节点，join 本地完成免 shuffle。

# 参考回答

Broadcast Join 把小的维表广播到所有 TaskManager，join 时本地直接关联，不用按 key shuffle，省大量网络。小表要能塞进内存，用 join hint 指定。

# 追问

- 广播表多大合适？
