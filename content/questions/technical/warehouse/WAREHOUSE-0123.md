---
id: WAREHOUSE-0123
type: technical
question: 你如何确保数据仓库中的数据质量和一致性？
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

靠事前规范、事中校验、事后监控三层来兜住质量和一致性。

# 参考回答

事前定好口径和表规范，把指标定义清楚；事中在 ETL 里加 DQC 校验，比如空值率、主键唯一性、环比波动；事后做监控告警，发现异常就回溯重刷。一致性主要靠统一指标字典和口径注册，大家用同一套定义，不各算各的。

# 追问

- 数据质量校验一般看哪些指标？
- 口径不一致时怎么处理？
