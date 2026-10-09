---
id: STORAGE-0107
type: technical
question: 如何理解Hive的类型转换函数？请详细说明常用类型转换函数（如CAST、CONVERT等）的使用方法和注意事项。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

CAST 显式转换类型。

# 参考回答

CAST 把一种类型转成另一种，比如字符串转数字、数字转字符串。转换失败会返回 null 或报错，要处理异常。注意精度和格式匹配。

# 追问

- 转换失败会怎样？
