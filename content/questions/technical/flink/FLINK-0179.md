---
id: FLINK-0179
type: technical
question: Flink的Join算法实现原理是什么？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

流式 join 用状态保存两边的数据。

# 参考回答

Flink 流式 join 在两边维护状态，数据来了和另一边的状态匹配，配合 watermark 清理过期状态。有 regular join、interval join 和 temporal join。

# 追问

- regular join 和 interval join 区别？
