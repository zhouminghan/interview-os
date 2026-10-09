---
id: FLINK-0086
type: technical
question: 如何监控Flink作业的反压情况？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

看 Flink UI 的反压状态。

# 参考回答

监控反压看 Flink UI 的反压页面，每个算子标 OK 或 HIGH 表示反压程度。反压 HIGH 就顺着找最下游的瓶颈算子。

# 追问

- 反压严重怎么定位根因？
