---
id: STORAGE-0423
type: technical
question: 如何设计HBase的数据生命周期管理？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

TTL 分级管理数据生命周期。

# 参考回答

生命周期管理按数据热度设 TTL，热数据常驻，冷数据过期或归档。分级保留策略。定期清理，控制存储增长。

# 追问

- 生命周期怎么设计？
