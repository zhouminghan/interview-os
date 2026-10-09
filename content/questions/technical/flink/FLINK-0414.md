---
id: FLINK-0414
type: technical
question: 解释物联网领域中FlinkSQL的典型应用场景及实践案例。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

设备数据实时监控、告警、预测维护。

# 参考回答

物联网用 Flink SQL 实时处理海量设备传感器数据，做状态监控、异常告警和预测维护。事件时间和乱序处理很关键，设备数据经常乱序。

# 追问

- 设备数据为什么乱序多？
