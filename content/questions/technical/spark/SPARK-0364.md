---
id: SPARK-0364
type: technical
question: 什么是 DataSet？其相比 DataFrame 和 RDD 的优势？
difficulty: 0
topic: []
source_type: knowledge
---

DataSet 是 RDD 和 DataFrame 的结合体。优势：
- **类型安全**：编译时检查，DataFrame 在运行时检查
- **性能**：使用 Catalyst 优化器和 Tungsten 执行引擎
- **灵活语法**：支持 SQL 和函数式 API
