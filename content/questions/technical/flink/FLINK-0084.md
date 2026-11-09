---
id: FLINK-0084
type: technical
question: 什么是反压（Backpressure）？Flink如何处理？
topic:
- flink
difficulty: 1
frequency: low
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-10-10-bytedance-data-dev-3round
    company: 字节跳动
    position: 数据开发（秋招三面）
    date: 2026-10-10
---

> **来源面经**：字节-数据开发三面-20261010

# 一句话

下游处理慢时向上游传导压力，降低消费速率。

# 参考回答

反压是下游处理不过来时，把压力向上游传导，上游降低发送速率，避免数据积压和 OOM。Flink 用网络缓冲池和 credit 机制实现反压。

# 追问

- 反压会丢数据吗？
