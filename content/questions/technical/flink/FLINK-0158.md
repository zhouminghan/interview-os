---
id: FLINK-0158
type: technical
question: Flink中的CheckpointingFailed异常如何处理？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看日志找超时、存储、状态问题。

# 参考回答

checkpoint 失败看日志，常见是超时、存储不可用、状态太大。调超时参数、检查存储、减少状态。持续失败会导致恢复不可靠。

# 追问

- checkpoint 超时怎么调？
