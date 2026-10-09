---
id: STORAGE-0451
type: technical
question: 什么是Clickhouse的分布式表引擎？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

Distributed 表把查询分发到各分片。

# 参考回答

Distributed 表引擎本身不存数据，把查询分发到各分片节点，聚合结果返回。写也分发。是集群访问的统一入口。

# 追问

- Distributed 表怎么工作？
