---
id: STORAGE-0801
type: technical
question: offset 在 Kafka 中的作用是什么？
difficulty: 0
topic: []
source_type: knowledge
---

offset 是 Kafka topic 分区中每条记录的唯一标识符，表示记录在分区中的位置。消费者使用 offset 跟踪已读/未读消息。即使故障或重启，消费者也可从停止位置继续读取，确保不丢失、不重复。
