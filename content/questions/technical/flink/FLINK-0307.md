---
id: FLINK-0307
type: technical
question: 解释FlinkSQL中的Lookup Join（查询维表Join）的实现原理及使用方法。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

流数据实时查外部维表做关联。

# 参考回答

Lookup Join 是流数据来一条，就按关联键去外部维表查一次，比如查 MySQL、HBase。维表可以配缓存，避免每次都查。适合维表在外部系统、实时查询的场景。

# 追问

- Lookup Join 为什么要缓存维表？
