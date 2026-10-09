---
id: STARROCKS-0086
type: technical
question: StarRocks 的高可用如何实现？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

FE 多副本选主，BE 数据多副本，自动容错。

# 参考回答

高可用分两部分：FE 用多节点选主，主挂了自动切；BE 数据多副本，单节点挂了副本顶上。跨机架部署能进一步提高容灾能力。

# 追问

- 副本数一般设几个？
