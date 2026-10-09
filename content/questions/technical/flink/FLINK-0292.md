---
id: FLINK-0292
type: technical
question: FlinkSQL中有哪些错误处理策略？如何配置？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

重启策略、忽略或跳过错数据。

# 参考回答

错误处理策略有重启策略、跳过错误数据、侧输出。按错误类型配，可恢复的靠重启，数据错误靠侧输出或过滤。

# 追问

- 重启策略有哪些？
