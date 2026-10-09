---
id: FLINK-0073
type: technical
question: 如何监控和调试检查点操作？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看 Flink UI 的 checkpoint 页和日志。

# 参考回答

监控 checkpoint 看 Flink UI 的 checkpoint 页面，能看到成功率、耗时、大小。失败看日志定位是超时还是状态太大。checkpoint 持续失败要重视，说明恢复不可靠。

# 追问

- checkpoint 失败怎么排查？
