---
id: SPARK-0288
type: technical
question: 如何向 Spark 传递函数？
difficulty: 0
topic: []
source_type: knowledge
---

在 Spark API 中，将函数传递到 Driver 程序以便在集群上运行，Spark 中传递函数的两种常见方式如下：
- **匿名函数语法**：用于将短代码片段作为匿名函数传递。
- **单例对象中的静态方法**：还可以在只有一个实例（即单例）的对象中定义静态方法，该对象及其方法可以传递到集群节点。

---
