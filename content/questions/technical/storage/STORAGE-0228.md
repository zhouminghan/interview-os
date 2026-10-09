---
id: STORAGE-0228
type: technical
question: HBase的数据模型是怎样的？为什么说它是列族存储？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按列族物理存储，列族内动态加列。

# 参考回答

HBase 数据按列族物理存储，一个列族的列存在一起。列族内可以动态加列，不用预先定义所有列。所以叫列族存储，介于行存和列存之间。

# 追问

- 列族存和列存区别？
