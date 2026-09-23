---
id: NETWORK-0003
type: technical
question: 哪些协议基于 TCP
topic: [network, tcp, protocols]
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

需要可靠传输的应用层协议大多基于 TCP，如 HTTP/HTTPS、FTP、SMTP、SSH、MySQL。

# 30 秒回答

HTTP/HTTPS、FTP、SMTP、POP3、IMAP、SSH、Telnet、MySQL、Redis（默认 TCP）等都基于 TCP。

# 1 分钟回答

- Web：HTTP、HTTPS
- 邮件：SMTP、POP3、IMAP
- 文件：FTP
- 远程：SSH、Telnet
- 数据库：MySQL、PostgreSQL
- 原因：TCP 提供可靠字节流，上层协议专注业务语义

# 追问

- 哪些协议基于 UDP（DNS、DHCP、QUIC）？
- HTTPS 和 HTTP 的区别？
