---
id: SPARK-0257
type: technical
question: Spark 中常见的转换（Transformation）有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 中一些常见的转换如下：
- `map(func)`：基本转换，通过对输入数据集的每个元素传递 func 函数，返回新数据集。
- `filter(func)`：返回通过对 func 函数返回 true 的元素组成的新数据集，用于根据 func 函数中的条件过滤数据集中的元素。
- `union(otherDataset)`：用于将一个数据集与另一个数据集组合，形成两个数据集的并集。
- `intersection(otherDataset)`：返回两个数据集共有的元素。
- `pipe(command, [envVars])`：通过将数据集的每个分区传递给 Shell 命令来转换。

---
