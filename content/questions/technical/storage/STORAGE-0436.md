---
id: STORAGE-0436
type: technical
question: Clickhouse的进程模型是怎样的？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多线程单进程，充分利用 CPU。

# 参考回答

ClickHouse 是单进程多线程，充分利用多核 CPU 并行执行查询和合并。没有分布式计算框架，靠单机并行加多副本。

# 追问

- 为什么单进程多线程？
