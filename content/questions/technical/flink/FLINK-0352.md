---
id: FLINK-0352
type: technical
question: 如何实现FlinkSQL作业的自动恢复和自我修复？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠 checkpoint 和重启策略自动恢复。

# 参考回答

自动恢复靠 checkpoint 保存状态和 offset，配合重启策略失败自动重启，从 checkpoint 恢复继续处理。真正自我修复还需要监控告警和外部干预。

# 追问

- 自动恢复能解决所有故障吗？
