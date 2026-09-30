---
id: STORAGE-0790
type: technical
question: Hive 数据倾斜原因和优化
difficulty: 0
topic: []
source_type: knowledge
---

**原因**：热点 key 集中、JOIN 键分布不均、GROUP BY 某 key 数据量极大

**优化**：Map Join 小表 / 加盐打散 / 两阶段聚合 / `hive.groupby.skewindata=true`
