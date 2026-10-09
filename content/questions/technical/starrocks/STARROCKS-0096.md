---
id: STARROCKS-0096
type: technical
question: StarRocks 集群无法启动如何处理？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看日志定位，常见端口冲突、元数据损坏、配置错误。

# 参考回答

先看 FE、BE 启动日志，常见是端口被占、元数据损坏、配置写错、磁盘问题。定位到具体报错再针对性处理，必要时用备份恢复元数据。

# 追问

- 元数据损坏怎么恢复？
