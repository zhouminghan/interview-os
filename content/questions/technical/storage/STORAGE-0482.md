---
id: STORAGE-0482
type: technical
question: 写出使用ReplacingMergeTree处理重复数据的建表语句。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

ENGINE 用 ReplacingMergeTree。

# 参考回答

建表 ENGINE=ReplacingMergeTree，指定主键，合并时相同主键只保留最新版本。适合重复数据去重，但合并是异步的，查询要配合。

# 追问

- ReplacingMergeTree 注意什么？
