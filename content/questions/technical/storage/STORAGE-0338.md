---
id: STORAGE-0338
type: technical
question: HBase的扫描性能如何优化？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

缩小扫描范围，加过滤器和缓存。

# 参考回答

scan 优化设 start 和 stop 缩小范围、加过滤器、控制返回列、加大缓存。全表扫最慢，能精确 get 就别 scan。

# 追问

- scan 为什么慢？
