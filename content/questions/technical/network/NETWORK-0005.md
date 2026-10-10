---
id: NETWORK-0005
type: technical
question: TCP 三次握手和四次挥手流程是怎样的？为什么挥手是四次不是两次？
topic: [network, tcp]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-10-10-bytedance-data-dev-3round
    company: 字节跳动
    position: 数据开发（秋招三面）
    date: 2026-10-10
---

# 一句话

三次握手建立连接，四次挥手关闭连接，挥手多一次因为 TCP 是双向的、有半关闭状态。

# 参考回答

三次握手：客户端发 SYN，服务端回 SYN+ACK，客户端再回 ACK，确认双方收发都正常后建立连接。四次挥手：一端发 FIN，对端回 ACK，对端再发 FIN，这端回 ACK。挥手比握手多一次，因为 TCP 是双向的，一方关闭后另一方可能还有数据要发，中间有半关闭状态，所以两边要各自 FIN 一次。为什么不是两次：两次握手无法确认双方收发能力都正常。

# 追问

- 为什么握手是三次而不是两次？
- TIME_WAIT 状态有什么作用？
