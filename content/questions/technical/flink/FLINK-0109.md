---
id: FLINK-0109
type: technical
question: Flink的日志系统如何配置？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用 log4j 或 logback 配日志级别和输出。

# 参考回答

Flink 日志用 log4j 或 logback 配置，JobManager 和 TaskManager 分别记。生产配到集中日志系统，方便排查。

# 追问

- JobManager 和 TaskManager 日志分开放？
