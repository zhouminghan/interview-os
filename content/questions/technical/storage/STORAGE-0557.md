---
id: STORAGE-0557
type: technical
question: 解释Clickhouse的查询超时设置。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

设置查询超时防止长查询占资源。

# 参考回答

查询超时配置 max_execution_time，超过就中断。防止慢查询长时间占用资源。按业务查询时长设。

# 追问

- 超时设多少？
