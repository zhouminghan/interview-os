---
id: STORAGE-0731
type: technical
question: 如果副本长时间不在 ISR 中说明什么？
difficulty: 0
topic: []
source_type: knowledge
---

如果一个副本长时间停留在 ISR（同步副本）之外，说明该副本无法跟上 leader 的日志更新。这可能是由于网络问题、硬件故障或 broker 上的高负载造成的。结果，该副本可能成为分区可用性和持久性的瓶颈，因为它无法参与确认写入，也不可能在当前 leader 故障时被选为 leader。

---
