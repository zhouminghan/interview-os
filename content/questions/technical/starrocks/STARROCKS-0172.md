---
id: STARROCKS-0172
type: technical
question: StarRocks 如何与数据湖进行集成？
topic:
- starrocks
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

通过 Hive 外表和外部 Catalog 直查数据湖。

# 参考回答

StarRocks 支持 External Catalog，直接查 Hive、Iceberg、Hudi 这类数据湖表，不用先导入，实现湖仓一体查询。

# 追问

- 湖仓一体查询和导入的差别？
