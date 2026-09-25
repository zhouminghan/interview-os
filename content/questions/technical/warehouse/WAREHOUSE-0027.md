---
id: WAREHOUSE-0027
type: technical
question: 测试环境数据和生产环境数据是否一致
topic: [warehouse, environment]
difficulty: 2
frequency: medium
source_type: ai_generated
sources:
  - interview_id: INTERVIEW-2026-09-24-meituan-data-dev
    company: 美团
    position: 数据开发（一面）
    date: 2026-09-24
---

# 一句话

通常不一致：测试用脱敏/子集数据，但要保证 schema、口径和链路逻辑一致。

# 30 秒回答

测试环境一般用生产脱敏子集或造数，数据本身不等同生产；关键保证 schema、口径、代码链路一致，发布前再用生产子集或影子数据校验。

# 1 分钟回答

- 数据：脱敏、子集、造数，不等于生产
- 一致的部分：schema、口径、任务逻辑、配置
- 发布前：用生产子集/影子流量验证
- 原因：合规、成本、数据安全

# 追问

- 怎么保证测试能代表生产？
- 影子数据怎么做？
