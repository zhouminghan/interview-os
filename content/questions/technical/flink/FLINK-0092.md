---
id: FLINK-0092
type: technical
question: Flink的资源调度算法是怎样的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

按 slot 分配，考虑数据本地性和负载。

# 参考回答

Flink 调度按 slot 把子任务分配到 TaskManager，考虑 slot 数量和负载均衡。不同部署模式交给外部资源管理器，内部再做子任务调度。

# 追问

- slot 分配要考虑什么？
