---
id: STARROCKS-0134
type: technical
question: StarRocks 的分布式事务实现原理是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

导入事务加版本机制，保证要么成功要么失败。

# 参考回答

StarRocks 的分布式事务主要是导入事务，靠版本号和提交协议，保证一次导入要么全成功要么全失败，查询读到一致版本。不是传统数据库那种 ACID 完整事务。

# 追问

- StarRocks 为什么不做完整 ACID？
