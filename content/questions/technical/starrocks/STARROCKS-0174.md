---
id: STARROCKS-0174
type: technical
question: StarRocks 如何支持 Elasticsearch 数据源？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

通过 External Catalog 查 ES，或导出导入。

# 参考回答

StarRocks 支持 Elasticsearch 外表，能直接查 ES 索引做分析。但 ES 本身查询慢，一般适合少量过滤后取数，大数据分析还是导入列存更合适。

# 追问

- ES 为什么不适合大数据分析？
