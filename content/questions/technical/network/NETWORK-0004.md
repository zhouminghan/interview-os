---
id: NETWORK-0004
type: technical
question: UDP 属于哪一层
topic: [network, udp, osi]
difficulty: 1
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

UDP 属于传输层（OSI 第四层，TCP/IP 模型的传输层）。

# 30 秒回答

UDP 和 TCP 一样位于传输层，负责端到端的通信；IP 在网络层，HTTP/DNS 等在应用层。

# 1 分钟回答

- OSI 七层：应用、表示、会话、传输、网络、数据链路、物理
- TCP/IP 四层：应用、传输、网络、网络接口
- UDP 位于传输层，提供端口复用的无连接数据报服务

# 追问

- TCP/IP 模型各层分别有哪些协议？
- 端口号在传输层的作用？
