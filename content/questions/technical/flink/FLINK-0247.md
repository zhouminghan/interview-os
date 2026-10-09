---
id: FLINK-0247
type: technical
question: 如何在FlinkSQL中创建和使用自定义UDF？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 ScalarFunction，注册后 SQL 用。

# 参考回答

创建 UDF 继承 ScalarFunction，实现 eval 方法，用 createFunction 注册后 SQL 里调用。注意类型和序列化。

# 追问

- eval 方法怎么定义？
