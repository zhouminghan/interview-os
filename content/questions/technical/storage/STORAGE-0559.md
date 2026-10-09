---
id: STORAGE-0559
type: technical
question: Clickhouse的分区合并策略如何配置？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

配置合并触发条件和并发。

# 参考回答

分区合并配置合并线程、块大小阈值、合并策略。按写入负载调，避免合并抢资源。MergeTree 后台自动合并。

# 追问

- 合并怎么配？
