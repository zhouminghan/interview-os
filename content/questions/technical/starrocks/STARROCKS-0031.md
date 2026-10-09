---
id: STARROCKS-0031
type: technical
question: StarRocks 中的物化视图是什么？其作用是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

物化视图是预计算好的结果，查询时直接复用加速。

# 参考回答

物化视图把常用的聚合结果提前算好存下来，查询命中就直接取结果，不用现算。适合高频的固定维度聚合。缺点是占存储、刷新有延迟，所以要在加速和成本之间权衡。

# 追问

- 物化视图和普通表有什么区别？
