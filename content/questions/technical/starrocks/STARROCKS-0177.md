---
id: STARROCKS-0177
type: technical
question: 如何从 ClickHouse 迁移到 StarRocks？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

导出 ClickHouse 数据再导入，注意建模差异。

# 参考回答

从 ClickHouse 迁移主要是导出数据再导入 StarRocks，但建模思路不同：ClickHouse 偏宽表，StarRocks 偏多表 join，可以借机重建设计。

# 追问

- ClickHouse 宽表迁移怎么拆？
