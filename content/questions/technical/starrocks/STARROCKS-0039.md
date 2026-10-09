---
id: STARROCKS-0039
type: technical
question: StarRocks 支持哪些聚合函数？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

标准聚合加近似聚合，比如 count distinct、bitmap、hll。

# 参考回答

除了 sum、count、avg、max、min 这些标准聚合，StarRocks 还支持 count distinct、bitmap、hll 近似去重，大基数去重用 bitmap 或 hll 会快很多。还有窗口聚合和 group by 的 cube、rollup。

# 追问

- bitmap 去重和 count distinct 的区别？
