---
id: WAREHOUSE-0293
type: technical
question: Pipeline 设计：每天 Top3 交易产品
difficulty: 0
topic: []
source_type: knowledge
---

凌晨 ETL → DWD 聚合 → DWS 按 product_id 算 GMV → ADS ROW_NUMBER Top3 → 调度 9:30 前完成。
