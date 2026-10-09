---
id: FLINK-0249
type: technical
question: 如何在FlinkSQL中创建和使用自定义UDTF？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

继承 TableFunction，一条进多条出。

# 参考回答

UDTF 继承 TableFunction，实现 eval 方法，用 collect 输出多行。一条输入拆成多条输出，像 explode 就是内置的 UDTF。

# 追问

- UDTF 怎么在 SQL 里用？
