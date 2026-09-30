---
id: STORAGE-0657
type: technical
question: Hive 中 RLIKE 运算符是什么？
difficulty: 0
topic: []
source_type: knowledge
---

`RLIKE` 是一个类似于 SQL 中 `LIKE` 的运算符。`LIKE` 用于搜索具有相似文本的字符串，例如：`user_name LIKE '%Smith%'`。

Hive 提供 `RLIKE` 运算符，可用于搜索 Java 中的高级正则表达式，例如：`user_name RLIKE '.*(Smith|Sam).*'`，这将返回用户名中包含 Smith 或 Sam 的记录。

---
