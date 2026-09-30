---
id: WAREHOUSE-0371
type: technical
question: 对数据/技术更深入的思考？数据湖了解吗？Hudi 用过吗？
difficulty: 0
topic: []
source_type: knowledge
---

**参考回答**：
> 平台正从传统数仓向湖仓一体演进：数据湖统一存储结构/半结构/非结构化数据、支持批流一体。我接触过 Iceberg，也了解 Hudi、Delta Lake——本质都是开放表格式，靠 Snapshot、元数据管理、ACID 解决传统湖难管理问题。Iceberg 适分析（隐藏分区、Schema Evolution、Time Travel）；Hudi 强调实时写入/Upsert，CDC 场景多。也关注 AI 与平台结合（大模型辅助 SQL 开发、治理、元数据检索）。若没真用过 Hudi 就别说自己精通，说了解适用场景即可。

**💡 点评**：简历写了 Iceberg 这样答很自然；没用过别吹，避免被追问底层穿帮。
