---
id: STORAGE-0227
type: technical
question: 请解释HBase中的Table、RowKey、Column Family、Column Qualifier、Cell和Version的概念。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

表按行键组织，列分族，单元格带版本。

# 参考回答

Table 是表，RowKey 是行键唯一标识一行，Column Family 是列族，Column Qualifier 是列族下的具体列，Cell 是行列确定的值，Version 是时间戳版本。数据按 RowKey 排序存。

# 追问

- 列族是什么？
