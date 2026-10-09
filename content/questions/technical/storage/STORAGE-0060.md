---
id: STORAGE-0060
type: technical
question: Hive中的表属性有哪些？请详细说明各种表属性的作用、配置方法、使用场景和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表属性控制格式、压缩、存储等行为。

# 参考回答

表属性有格式、压缩、事务、生命周期这些，用 TBLPROPERTIES 设置。比如设置 ORC 压缩、开启事务。合理配表属性能省存储和优化查询。

# 追问

- 常用表属性有哪些？
