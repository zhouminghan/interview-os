---
id: FLINK-0064
type: technical
question: Flink的容错机制是如何工作的？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
sources:
  - interview_id: INTERVIEW-2026-10-10-bytedance-data-dev-3round
    company: 字节跳动
    position: 数据开发（秋招三面）
    date: 2026-10-10
---

> **来源面经**：字节-数据开发三面-20261010

# 一句话

checkpoint 快照状态，故障从快照恢复。

# 参考回答

Flink 容错靠 checkpoint 定期对状态做一致性快照，存到可靠存储。任务挂了按重启策略从最近 checkpoint 恢复状态和 offset，继续处理。配合 source 重放实现 exactly-once。

# 追问

- 恢复会丢数据吗？
