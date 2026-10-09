---
id: STORAGE-0188
type: technical
question: 什么是Hive的负载均衡？请详细说明负载均衡的策略、配置方法和最佳实践。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

多个 HiveServer2 分担查询负载。

# 参考回答

负载均衡用多个 HiveServer2 实例，前面挂 LB 分发请求。按连接数或轮询。避免单点压力，提高并发能力。

# 追问

- LB 策略怎么选？
