---
id: WAREHOUSE-0063
type: technical
question: 一亿条用户行为数据产出日活/留存/付费报表，怎么保证查询速度和时效
topic: [warehouse, report, performance]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

用分层预聚合 + 列存 OLAP + 分区分桶 + 物化视图保证速度和时效。

# 30 秒回答

DWD 明细 -> DWS 按日/月预聚合，结果落 Doris/StarRocks 列存，分区裁剪 + 分桶 + 物化视图，再按天定时产出报表。

# 1 分钟回答

- 预聚合：日活/留存/付费提前算成汇总层
- 存储：列存 OLAP（Doris/StarRocks/ClickHouse）
- 建模：分区分桶、排序键、物化视图
- 时效：离线 T+1 为主，关键指标走实时

# 追问

- 留存怎么高效计算？
- 亿级数据一天能算完吗，怎么优化？
