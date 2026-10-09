---
id: STORAGE-0329
type: technical
question: HBase的BlockCache调优有哪些方法？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

调缓存大小和策略。

# 参考回答

BlockCache 调优调整缓存大小、淘汰策略。读多场景加大缓存，用 BucketCache 配合堆外内存。命中率高读就快。

# 追问

- Lru 和 Bucket 区别？
