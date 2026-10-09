---
id: FLINK-0322
type: technical
question: 解释如何在FlinkSQL中实现和使用自定义Catalog。
topic:
- flink
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

实现 CatalogFactory，管理自定义元数据。

# 参考回答

自定义 Catalog 要实现 CatalogFactory，定义怎么管理库、表、函数的元数据。对接自己的元数据中心时用。一般用内置的 Hive Catalog 就够了。

# 追问

- 什么场景需要自定义 Catalog？
