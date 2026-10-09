---
id: FLINK-0162
type: technical
question: Flink作业重启后处理位置不正确的解决方法？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

检查 offset 提交和 checkpoint 恢复。

# 参考回答

重启后位置不对，检查 offset 是否正确提交、是否从 checkpoint 恢复。没开 checkpoint 就会从头消费或重复。配置好 checkpoint 和 offset 管理。

# 追问

- offset 提交在哪配置？
