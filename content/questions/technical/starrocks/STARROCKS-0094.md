---
id: STARROCKS-0094
type: technical
question: 如何优化 StarRocks 的数据导入并发度？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调导入并发参数，分桶均匀，避免单节点热点。

# 参考回答

导入并发优化主要调导入任务的并行度和 batch 大小，同时保证分桶均匀，避免数据都压到少数节点。Broker Load 可以多文件并行，Routine Load 调消费并发。

# 追问

- 并发越高越好吗？
