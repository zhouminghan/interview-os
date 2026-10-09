---
id: STARROCKS-0051
type: technical
question: StarRocks 如何实现数据加密？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

传输层用 SSL 加密，存储层可配落盘加密。

# 参考回答

StarRocks 的加密分传输和存储两块：传输层用 SSL/TLS 加密网络数据，存储层可以配合底层文件系统或磁盘加密，对落盘数据做保护。敏感场景一般两层都加，再配合权限和脱敏。

# 追问

- 落盘加密会影响查询性能吗？
