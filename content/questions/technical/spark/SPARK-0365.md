---
id: SPARK-0365
type: technical
question: RDD、DataFrame、DataSet 的区别？
difficulty: 0
topic: []
source_type: knowledge
---

| 特性 | RDD | DataFrame | DataSet |
|------|-----|-----------|---------|
| 类型安全 | 是 | 否 | 是 |
| 运行时优化 | 无 | Catalyst | Catalyst |
| 序列化 | Java/Kryo | Tungsten | Tungsten |
| 垃圾回收 | 高开销 | 低开销 | 低开销 |
| API | 函数式 | 声明式 | 两者皆可 |
| 引入版本 | 1.0 | 1.3 | 1.6 |
