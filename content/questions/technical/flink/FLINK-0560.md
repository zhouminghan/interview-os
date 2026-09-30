---
id: FLINK-0560
type: technical
question: Flink TopN 和离线 TopN 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

TopN 是离线和实时计算中常见的功能。不同的是：离线计算中的 TopN，实时数据是连续的，这给 TopN 计算带来了很大困难，因为它需要在内存中一直维护一个 TopN 数据结构，当有新数据到来时，更新这个数据结构。

---
