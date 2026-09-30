---
id: WAREHOUSE-0364
type: technical
question: ClickHouse 解决什么问题？有什么缺点？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> 用作高性能 OLAP，如运营报表、实时大盘、多维分析，查询延迟秒级甚至毫秒级，比 Hive 低很多；聚合结果同步到 CK 供 BI/运营平台。缺点：不适高并发事务更新；Update/Delete 成本高（MergeTree 后台合并）；高基数字段多影响压缩和查询；超大规模需考虑副本同步、数据均衡、Merge 资源消耗。一般靠合理分区、排序键、冷热分离优化。

**💡 点评**：别答"没缺点"，任何库都有适用边界。

---

## 六、SQL 笔试题
