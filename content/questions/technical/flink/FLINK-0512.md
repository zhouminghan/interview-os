---
id: FLINK-0512
type: technical
question: Flink 的分布式缓存
difficulty: 0
topic: []
source_type: knowledge
---

Flink 实现的分布式缓存类似于 Hadoop。目的是将文件本地读取并放到 TaskManager 节点中，防止任务重复拉取数据，降低性能。

---
