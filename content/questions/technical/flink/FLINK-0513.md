---
id: FLINK-0513
type: technical
question: Flink 中的广播变量
difficulty: 0
topic: []
source_type: knowledge
---

我们知道 Flink 是并行的，计算过程可能不在同一个 Slot 中执行。那么会出现一种情况：当我们需要访问相同的数据时，Flink 中的广播变量就是为了解决这种情况。我们可以将广播变量理解为一个公共共享变量。我们可以广播一个数据集，然后不同的 task 可以在节点上获取它。每个节点上这份数据只会有一份。

---
