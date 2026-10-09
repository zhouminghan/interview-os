---
id: FLINK-0442
type: technical
question: 什么是Kafka的日志段机制？请详细说明日志段的作用和管理方式。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

日志分成多个段文件，按大小滚动。

# 参考回答

Kafka 把分区的日志分成多个段文件，写到一定大小就切新段。清理按段删除，方便管理磁盘和按时间清理旧数据。

# 追问

- 日志段为什么要分段？
