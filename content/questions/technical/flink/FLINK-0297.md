---
id: FLINK-0297
type: technical
question: 如何处理FlinkSQL中由于数据格式错误导致的失败？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

容错配置或侧输出，把错误数据分流。

# 参考回答

数据格式错误会导致反序列化失败。处理方式有：容错配置跳过错误数据、把错误数据侧输出单独记录、或前置校验数据源。生产上一般跳过错误并记日志。

# 追问

- 跳过错误数据有什么风险？
