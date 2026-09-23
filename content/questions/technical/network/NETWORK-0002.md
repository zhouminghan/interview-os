---
id: NETWORK-0002
type: technical
question: TCP 拥塞控制了解吗
topic: [network, tcp, congestion-control]
difficulty: 3
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

拥塞控制靠拥塞窗口 cwnd 动态调整，包括慢启动、拥塞避免、快重传、快恢复四个阶段。

# 30 秒回答

慢启动指数增长到阈值 ssthresh，之后拥塞避免线性增长；收到 3 个重复 ACK 触发快重传、快恢复；超时重传则重新进入慢启动。

# 1 分钟回答

- 慢启动：cwnd 从 1 指数增长
- 拥塞避免：达到 ssthresh 后线性增长
- 快重传：收到 3 个重复 ACK 立即重传
- 快恢复：快重传后 cwnd 减半，进入拥塞避免而不是慢启动
- 超时：超时重传后 cwnd 归 1，重新慢启动

# 追问

- 流量控制和拥塞控制的区别？
- ssthresh 是怎么变化的？
