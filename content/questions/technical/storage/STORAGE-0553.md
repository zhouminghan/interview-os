---
id: STORAGE-0553
type: technical
question: 解释Clickhouse的Merge过程优化。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

控制合并并发和时机。

# 参考回答

Merge 优化控制合并线程数、合并块大小、错峰合并。合并太多抢 IO，太少数据块多查询慢。按负载调合并参数。

# 追问

- 合并怎么调？
