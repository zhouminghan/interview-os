---
id: STARROCKS-0185
type: technical
question: 如何从 StarRocks 导出数据？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用导出到对象存储或 SELECT INTO OUTFILE。

# 参考回答

StarRocks 导出可以用导出任务把数据写到 HDFS、S3，或用 SELECT INTO OUTFILE 导成文件。一般用于数据交付或迁移。

# 追问

- 大批量导出用什么？
