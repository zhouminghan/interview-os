---
id: STORAGE-0335
type: technical
question: HBase的网络配置如何优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调 RPC 线程和连接参数。

# 参考回答

网络优化调 RPC 处理线程数、连接超时、缓冲区大小。高并发场景加大线程池。网络是 HBase 读写的重要环节。

# 追问

- 网络瓶颈怎么排查？
