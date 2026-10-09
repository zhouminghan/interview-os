---
id: FLINK-0356
type: technical
question: 不同Flink版本的SQL语法差异及迁移注意事项。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

注意新语法、废弃语法和默认行为变化。

# 参考回答

版本迁移注意新加或废弃的 SQL 语法，比如窗口 TVF、连接器参数变化，还有默认行为变化。迁移前看 release note，在测试环境先验证 SQL 兼容性。

# 追问

- 迁移前要验证什么？
