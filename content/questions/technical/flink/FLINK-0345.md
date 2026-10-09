---
id: FLINK-0345
type: technical
question: 解释FlinkSQL在高可用(High Availability)方面的配置和实现。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多 JobManager 加 ZooKeeper 选主。

# 参考回答

高可用配多个 JobManager，用 ZooKeeper 做选主和元数据存储，主挂了自动切。checkpoint 存可靠存储，重启从 checkpoint 恢复。

# 追问

- JobManager 挂了任务会丢吗？
