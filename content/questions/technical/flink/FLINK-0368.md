---
id: FLINK-0368
type: technical
question: 如何在FlinkSQL中实现多流JOIN？说明其实现原理及注意事项。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多流 join 维护多份状态，watermark 取最慢流。

# 参考回答

多流 join 在每边维护状态，数据来了和所有其他流的状态匹配。watermark 取所有流的最小值，防止提前触发丢数据。状态多，要特别控制 TTL。

# 追问

- 多流 join 状态为什么大？
