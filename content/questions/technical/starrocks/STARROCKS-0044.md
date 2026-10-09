---
id: STARROCKS-0044
type: technical
question: StarRocks 的排序和 ORDER BY 有什么特点？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

排序键决定存储顺序和前缀索引，ORDER BY 全局排序代价高。

# 参考回答

StarRocks 的排序分两层：建表时的排序键决定数据存储顺序和前缀索引，影响查询性能；查询里的 ORDER BY 是全局排序，数据量大时代价高。所以把常用过滤字段设成排序键比查询时排序更高效。

# 追问

- 排序键怎么选？
