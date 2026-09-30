---
id: STORAGE-0670
type: technical
question: Hive 中 TRIM 和 RPAD 函数如何工作？
difficulty: 0
topic: []
source_type: knowledge
---

`TRIM` 和 `RPAD` 函数用于处理 Hive 中的 String 数据类型。通过 `TRIM` 函数，可以删除字符串前后多余的空格，对于格式化用户输入（用户可能输入了多余空格）非常有用。`TRIM` 函数的其他变体是 `LTRIM` 和 `RTRIM`，分别删除字符串左侧和右侧的空格。

例如：`TRIM(' Smith ')` → `'Smith'`

`RPAD` 函数用于在字符串右侧添加填充（额外空格），使字符串达到指定长度。`LPAD` 函数与 `RPAD` 相同，但它在字符串左侧填充。`RPAD` 和 `LPAD` 函数中还可以指定可选的填充字符。这些函数与 SQL 中的函数类似。

---
