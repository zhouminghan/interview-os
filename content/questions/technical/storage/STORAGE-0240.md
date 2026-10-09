---
id: STORAGE-0240
type: technical
question: 什么是HBase的过滤器(Filter)？常用的过滤器有哪些？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

过滤器在 scan 时过滤数据。

# 参考回答

过滤器在扫描时按条件过滤，减少返回的数据。常用有行键过滤器、列值过滤器、前缀过滤器、分页过滤器。过滤在服务端做，减少网络传输。

# 追问

- 过滤器能提升性能吗？
