---
id: STARROCKS-0017
type: technical
question: StarRocks 的主要特点是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

MPP 分布式、列存、向量化、兼容 MySQL、支持实时更新。

# 参考回答

特点就几个：MPP 架构横向扩展、列式存储压缩好、向量化执行查得快、支持主键模型做实时更新、兼容 MySQL 协议好接入。所以它既快又好用，是现在很主流的 OLAP 引擎。

# 追问

- 实时更新靠什么模型实现？
