---
id: STARROCKS-0032
type: technical
question: 如何优化 StarRocks 的数据导入性能？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

提高并发、合并小批次、合理分区分桶、选对导入方式。

# 参考回答

导入优化主要几招：提高导入并发度、避免太碎的小批次、合理设计分区分桶减少热点、选合适的导入方式，比如大批量用 Broker Load、实时用 Routine Load。还有开事务批量提交减少版本数。

# 追问

- 小批次太多会有什么问题？
