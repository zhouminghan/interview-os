---
id: WAREHOUSE-0047
type: technical
question: 设计一套系统的数据治理方案，从哪些方面考虑
topic: [warehouse, governance]
difficulty: 3
frequency: high
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-26-sunwoda-data-dev
    company: 欣旺达
    position: 数据开发（秋招）
    date: 2026-09-26
---

# 一句话

数据治理覆盖元数据、口径、质量、生命周期、成本、权限、血缘和规范。

# 30 秒回答

从元数据管理、指标口径统一、数据质量、生命周期与存储、权限安全、血缘、命名/建模规范、组织流程几个维度系统设计。

# 1 分钟回答

- 元数据：资产登记、字段/表元数据
- 口径：指标字典统一
- 质量：完整性/准确性/一致性/及时性校验
- 生命周期：TTL、冷热分层、成本
- 权限与血缘：访问控制、影响分析
- 规范与流程：命名、建模、评审

# 追问

- 数据治理最核心的是什么？
- 治理怎么落地到流程？
