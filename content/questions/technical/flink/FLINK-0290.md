---
id: FLINK-0290
type: technical
question: 如何在FlinkSQL中正确处理和分析错误数据？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用侧输出或过滤分流错误数据。

# 参考回答

错误数据处理用侧输出把坏数据分流，或加过滤和清洗逻辑。记录错误原因，方便回溯和修复。

# 追问

- 错误数据要保留吗？
