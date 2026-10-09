---
id: STORAGE-0449
type: technical
question: 解释Clickhouse的表函数概念。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表函数动态生成表。

# 参考回答

表函数像 table 函数，动态生成数据表，比如 file 读文件、remote 查远程、generate 生成数据。灵活读外部和临时数据。

# 追问

- 表函数什么时候用？
