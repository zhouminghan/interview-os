---
id: NETWORK-0001
type: technical
question: TCP 和 UDP 的区别
topic: [network, tcp, udp]
difficulty: 2
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-09-bytedance-data-dev
    company: 字节跳动
    position: 数据开发（秋招）
    date: 2026-09-09
---

# 一句话

TCP 面向连接、可靠、有序、开销大；UDP 无连接、不可靠、无序、开销小。

# 30 秒回答

TCP 三次握手建立连接，靠确认、重传、序号、流量/拥塞控制保证可靠和顺序；UDP 直接发包，尽力而为，可能丢包、乱序，但头部小、速度快。

# 1 分钟回答

- 连接：TCP 面向连接，UDP 无连接
- 可靠性：TCP 可靠，UDP 不可靠
- 顺序：TCP 有序字节流，UDP 无序报文
- 头部：TCP 20 字节，UDP 8 字节
- 场景：TCP 用于文件、网页、邮件；UDP 用于视频、语音、游戏、DNS

# 追问

- 三次握手四次挥手过程？
- TCP 为什么可靠？
- 为什么视频直播常用 UDP？
