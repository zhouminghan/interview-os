---
id: STORAGE-0706
type: technical
question: Hive 中 LIKE 和 RLIKE 运算符的区别？
difficulty: 0
topic: []
source_type: knowledge
---

- `LIKE` 运算符的行为与 SQL 中用于 select 查询的正则运算符相同。例如：`street_name like '%Chi%'`
- `RLIKE` 运算符使用 Java 中可用的更高级正则表达式。例如：`street_name RLIKE '.*(Chi|Oho).*'` 将选择任何包含 Chi 或 Oho 的单词。

---
