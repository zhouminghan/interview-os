---
id: STORAGE-0466
type: technical
question: Clickhouse的窗口函数支持情况如何？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

支持标准窗口函数。

# 参考回答

ClickHouse 支持 row_number、rank、lag、lead、sum over 等窗口函数。做分组 TopN、累计、环比。窗口函数性能不错。

# 追问

- 窗口函数常用哪些？
