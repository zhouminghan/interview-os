---
id: FLINK-0089
type: technical
question: Flink如何实现流量控制？
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

用网络缓冲和 credit 机制控制数据流速。

# 参考回答

流量控制靠网络缓冲池和信用机制，下游给上游发 credit 表示能接收多少数据，上游按 credit 发送，避免缓冲爆掉。

# 追问

- credit 机制怎么工作的？
