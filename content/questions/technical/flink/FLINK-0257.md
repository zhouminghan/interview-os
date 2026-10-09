---
id: FLINK-0257
type: technical
question: 解释如何在SQL Client中执行文件中的SQL语句。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 -f 指定 SQL 文件执行。

# 参考回答

用 sql-client -f 指定 SQL 文件，批量执行文件里的语句。适合部署和批量初始化。

# 追问

- 批量执行适合什么场景？
