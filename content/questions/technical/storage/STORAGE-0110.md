---
id: STORAGE-0110
type: technical
question: 如何理解Hive的正则表达式函数？请详细说明常用正则表达式函数（如REGEXP、REGEXP\_REPLACE等）的使用方法和场景。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用正则匹配和替换字符串。

# 参考回答

regexp 判断是否匹配，regexp_extract 提取匹配部分，regexp_replace 替换。用于复杂字符串清洗和提取。正则性能一般，能用简单函数就用简单的。

# 追问

- 正则和 split 怎么选？
