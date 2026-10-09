---
id: WAREHOUSE-0114
type: technical
question: 请描述数据仓库的开发流程
topic:
- warehouse
difficulty: 1
frequency: low
source_type: knowledge
---

# 一句话

需求分析到数据调研，再到建模、ETL 开发、调度上线、质量校验。

# 参考回答

一般先做需求调研，搞清楚业务要看什么指标、口径怎么定；然后做数据调研，看源数据在哪、质量怎么样；接着分层建模，从 ODS 到 DWD、DWS、ADS 一层层设计；再写 ETL 把数据加工出来、配调度；最后加质量校验和监控，上线后持续维护。核心是口径一定要跟业务对齐。

# 追问

- 建模之前为什么要先做需求调研？
- 数据调研阶段主要看什么？
