---
id: SPARK-0315
type: technical
question: RDD 机制和五大特性？
difficulty: 0
topic: []
source_type: knowledge
---

> **来源面经**：字节-国际化数据开发-20250303 Q6

五大特性：分区列表、计算函数、依赖关系、分区器（Hash/Range）、优先位置。

三个核心特点：不可变（Transformation 生成新 RDD）、惰性计算（遇 Action 才执行）、Lineage 容错（分区丢了按血缘重算）。

现在日常开发更多用 SQL/DataFrame API，底层由 Catalyst 优化器转换执行。

---
