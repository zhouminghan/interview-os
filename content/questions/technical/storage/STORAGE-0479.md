---
id: STORAGE-0479
type: technical
question: Clickhouse的INSERT语句有哪些特殊语法？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持 SELECT 插入、指定格式。

# 参考回答

INSERT 支持 INSERT SELECT 从查询插入，FORMAT 指定输入格式，还支持异步插入。大批量插入常用 INSERT SELECT。

# 追问

- 异步插入是什么？
