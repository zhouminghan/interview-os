---
id: SPARK-0158
type: technical
question: 如何实现Spark Streaming的数据清理？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

定期清理旧 checkpoint 和 WAL。

# 参考回答

数据清理主要是清过期的 checkpoint 目录、WAL 和中间数据，避免磁盘占满。可以设置 TTL 或定期脚本清理。

# 追问

- 清理 checkpoint 会影响恢复吗？
