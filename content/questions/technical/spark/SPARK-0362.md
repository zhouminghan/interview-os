---
id: SPARK-0362
type: technical
question: Spark 中常见的行动（Action）有哪些？
difficulty: 0
topic: []
source_type: knowledge
---

- `reduce(func)`：聚合 RDD 所有元素
- `collect()`：返回 RDD 所有元素到 Driver
- `count()`：统计元素数量
- `first()`：返回第一个元素
- `take(n)`：返回前 n 个元素
- `takeOrdered(n, [ordering])`：返回排序后的前 n 个
- `takeSample(withReplacement, num, [seed])`：随机采样
- `saveAsTextFile(path)`：保存为文本文件
- `saveAsSequenceFile(path)`：保存为 SequenceFile
- `saveAsObjectFile(path)`：保存为对象文件
- `countByKey()`：按 Key 计数
- `foreach(func)`：对每个元素应用函数
