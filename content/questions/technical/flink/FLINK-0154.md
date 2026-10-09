---
id: FLINK-0154
type: technical
question: Flink作业OutOfMemoryError的常见原因和解决方法？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

状态过大、堆太小、对象没释放。

# 参考回答

OOM 常见是状态过大、堆内存配小、大对象或数据倾斜。解法是用 RocksDB 存状态、调大堆、处理倾斜、用 TTL 清理状态。

# 追问

- OOM 怎么定位是状态还是堆？
