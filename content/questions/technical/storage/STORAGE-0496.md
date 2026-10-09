---
id: STORAGE-0496
type: technical
question: 如何使用Clickhouse的URL表函数读取外部数据？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

url 表函数读远程文件。

# 参考回答

url 表函数直接读远程 HTTP 文件，指定格式和列。适合读外部数据源，不用先落地。查询里 SELECT FROM url(...)。

# 追问

- url 函数怎么用？
