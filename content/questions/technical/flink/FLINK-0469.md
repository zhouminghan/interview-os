---
id: FLINK-0469
type: technical
question: 在Kafka集群中，如何优化消息的写入性能？请详细说明批量发送、压缩、异步发送等优化方法，以及各自的适用场景。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

批量发送、压缩、异步发送提高写入。

# 参考回答

写入优化用批量发送减少请求、压缩省带宽、异步发送不阻塞。批量适合吞吐优先，异步适合不关心单条延迟，压缩适合带宽瓶颈。

# 追问

- 异步发送有什么风险？
