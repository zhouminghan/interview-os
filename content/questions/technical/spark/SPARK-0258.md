---
id: SPARK-0258
type: technical
question: Spark 中常见的行动（Action）有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

Apache Spark 中一些常用的行动如下：
- `reduce(func)`：使用 func 函数聚合数据集的元素。
- `count()`：返回数据集中元素的总数。
- `collect()`：将数据集的所有元素作为数组返回给 Driver 程序。
- `first()`：返回集合的第一个元素。
- `take(n)`：返回数据集的前 n 个元素。
- `foreach(func)`：对数据集中的每个元素运行 for 循环，并对每个元素执行 func 函数。

---
