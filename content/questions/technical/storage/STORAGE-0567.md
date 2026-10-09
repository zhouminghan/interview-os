---
id: STORAGE-0567
type: technical
question: Clickhouse的查询并行度如何调整？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

max_threads 控制查询并行。

# 参考回答

查询并行度用 max_threads 控制单查询线程数，默认按 CPU 核数。线程太多切换开销大，太少用不满 CPU。按核数调。

# 追问

- 并行度怎么调？
