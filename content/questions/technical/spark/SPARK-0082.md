---
id: SPARK-0082
type: technical
question: 如何选择合适的RDD持久化级别？
topic:
- spark
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

内存够用 MEMORY_ONLY，不够就 MEMORY_AND_DISK。

# 参考回答

选级别看数据大小和内存：内存放得下就 MEMORY_ONLY 最快；放不下就 MEMORY_AND_DISK，避免 OOM 重算；内存特别紧张就用 DISK_ONLY 或序列化省内存。高频复用才值得持久化。

# 追问

- 序列化持久化有什么代价？
