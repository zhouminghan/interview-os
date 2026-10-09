---
id: STARROCKS-0033
type: technical
question: StarRocks 中的数据一致性是如何保证的？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠多副本、事务导入、版本机制保证一致。

# 参考回答

StarRocks 通过多副本同步、导入事务、版本号机制来保证一致性。查询读到的是某个一致版本，导入要么成功要么失败，不会读到写一半的数据。副本之间也有校验和修复机制。

# 追问

- 副本不一致时怎么修复？
