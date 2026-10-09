---
id: FLINK-0437
type: technical
question: 请详细解释Kafka中的消息压缩和解压缩过程，以及压缩对性能的影响。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

生产端压缩，消费端解压，省带宽费 CPU。

# 参考回答

生产端压缩消息，broker 原样存，消费端解压。压缩省网络和存储，但增加 CPU 开销。高带宽瓶颈时开压缩，CPU 紧张就关。

# 追问

- 压缩在哪个环节做？
