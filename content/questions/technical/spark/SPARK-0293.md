---
id: SPARK-0293
type: technical
question: Spark 中创建图的选项？
difficulty: 0
topic: []
source_type: knowledge
---

可以在 Spark 中从顶点和边的集合创建图，一些选项如下：
- `Graph.apply`：创建图的最简单选项，使用此选项从顶点和边的 RDD 创建图。
- `Graph.fromEdges`：还可以从边的 RDD 创建图，此选项中顶点自动创建，并为每个顶点分配默认值。
- `Graph.fromEdgeTuples`：还可以仅从元组的 RDD 创建图。

---
