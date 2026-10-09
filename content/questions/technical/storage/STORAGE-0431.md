---
id: STORAGE-0431
type: technical
question: 副本在Clickhouse中的作用是什么？
topic:
- storage
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

副本保证高可用和数据冗余。

# 参考回答

副本把分片的数据复制到多个节点，一个节点挂了副本顶上，保证高可用。副本也提升读并发。副本之间靠 ZooKeeper 协调。

# 追问

- 副本怎么同步？
