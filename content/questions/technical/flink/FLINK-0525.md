---
id: FLINK-0525
type: technical
question: 解释 Flink 架构？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Flink 基于 **Kappa 架构**。Kappa 架构使用单一处理器——流处理器，它接受所有信息作为流，流引擎实时处理数据。Kappa 架构中的批数据是一种流数据形式。

大多数大数据框架都构建在 Lambda 架构上，它使用不同的处理器来处理批处理和流数据。在 Lambda 架构中，批处理和流处理的视图有不同的代码库，必须合并才能查询和检索结果。维护不同的代码库/视图并合并它们很麻烦，但 Kappa 架构通过只有一个实时视图来解决这个问题，消除了代码库合并的需要。

Kappa 架构的核心原则是通过单一流处理引擎来管理批处理和实时数据。这并不是说 Kappa 架构比 Lambda 架构更优，完全取决于用例和应用来决定哪种架构最优。

---
