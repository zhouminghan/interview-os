---
id: SPARK-0295
type: technical
question: GraphX 中使用的分区方法？
difficulty: 0
topic: []
source_type: knowledge
---

**GraphX** 使用**点切割（Vertex-cut）**方法来进行分布式图分区。在此方法中，图不沿边拆分，而是沿顶点分区，这些顶点可以跨越多个机器。此方法减少了通信和存储开销。根据选择的分区策略，边被分配到不同的分区。

---
