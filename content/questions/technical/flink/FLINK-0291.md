---
id: FLINK-0291
type: technical
question: 如何进行FlinkSQL作业的容错性测试？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

模拟故障，验证 checkpoint 恢复。

# 参考回答

容错测试模拟任务失败和重启，验证从 checkpoint 能正确恢复，数据不丢不重。用 MiniCluster 注入故障测试。

# 追问

- 容错测试重点验证什么？
