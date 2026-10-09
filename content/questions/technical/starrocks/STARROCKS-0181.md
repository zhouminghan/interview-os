---
id: STARROCKS-0181
type: technical
question: 大数据量迁移到 StarRocks 的最佳实践是什么？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

分批并行导入、合理分区分桶、先全量后增量。

# 参考回答

大数据量迁移一般是先全量批量导入，再切增量同步。导入要并行、分批次，分区分桶提前设计好避免热点。全程对账验证。

# 追问

- 为什么先全量后增量？
