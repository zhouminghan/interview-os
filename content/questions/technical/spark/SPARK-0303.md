---
id: SPARK-0303
type: technical
question: RDD、DataFrame、DataSet 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

| 标准 | RDD | DataFrame | DataSet |
|---|---|---|---|
| 数据表示 | RDD 是没有结构的数据的分布式集合 | DataFrame 是按命名列组织的分布式数据集合，类似于关系数据库中的表 | DataSet 是 RDD 和 DataFrame 的结合，具有静态类型安全和面向对象接口的特性 |
| 优化 | 没有内置优化引擎 | 使用 Catalyst 优化器进行优化 | 使用 Catalyst 优化器进行优化 |
| 结构推断 | 需要手动定义结构 | 自动查找结构 | 自动通过 SQL 引擎查找结构 |
| 聚合速度 | 最慢 | 最快 | 介于两者之间 |

---
