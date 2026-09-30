---
id: WAREHOUSE-0299
type: technical
question: Hive 数据倾斜原理和优化 — 多篇面经高频
difficulty: 0
topic: [SHEIN]
source_type: knowledge
---

**原因**：
- 热点 key 集中在少数 Reduce
- JOIN 时关联键分布不均
- GROUP BY 某个 key 数据量极大

**优化**：
- Map Join 小表
- 加盐打散（key + 随机后缀）
- 两阶段聚合（先局部聚合再全局聚合）
- 开启 `hive.groupby.skewindata=true`
- 调整 Reduce 数量
