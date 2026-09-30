---
id: WAREHOUSE-0286
type: technical
question: 数仓分层设计（ODS/DWD/DWS/ADS）
difficulty: 0
topic: []
source_type: knowledge
---

| 层 | 职责 | 操作 |
|----|------|------|
| **ODS** | 原始数据接入，保持源格式 | 直接入仓 |
| **DWD** | 清洗规范化，明细数据 | 去重、标准化、维度退化 |
| **DWS** | 宽表聚合，轻度汇总 | 维度建模、预聚合 |
| **ADS** | 面向业务报表 | 定制化指标输出 |

**分层核心价值**：解耦、复用、质量可控、职责清晰、性能优化。
