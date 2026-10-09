---
id: STORAGE-0307
type: technical
question: 解释HBase的过滤器实现机制。
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤器在服务端扫描时判断。

# 参考回答

过滤器在 RegionServer 端扫描时对每行判断，不满足就跳过，减少返回客户端的数据。过滤器链组合多个条件。服务端过滤省网络。

# 追问

- 过滤器在哪执行？
