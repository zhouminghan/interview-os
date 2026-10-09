---
id: FLINK-0336
type: technical
question: 解释FlinkSQL作业中常见的内存溢出原因及解决方案。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

状态过大、堆太小、数据倾斜是常见原因。

# 参考回答

OOM 常见是状态过大、堆内存配小、数据倾斜、大对象。解决用 RocksDB 存状态、调大内存、处理倾斜、加状态 TTL。看是 TaskManager 还是 JobManager OOM。

# 追问

- TaskManager OOM 怎么排查？
