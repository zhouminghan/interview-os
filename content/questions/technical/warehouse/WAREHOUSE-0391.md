---
id: WAREHOUSE-0391
type: technical
question: 怎么让数仓 AI-ready？数仓要做什么改造才能支撑 AI Agent 取数？
topic: [warehouse, ai-ready, semantic-layer, metadata]
difficulty: 2
frequency: medium
source_type: knowledge
---

# 一句话

核心是补齐三样东西：完整准确的元数据（含业务口径）、可机器读的语义层、干净稳定的指标层。

# 30 秒回答

Agent 取数取不准，八成不是模型问题是数仓问题：schema 乱、注释缺、口径糊涂。所以 AI-ready 的改造重点不在加模型，而在把「人类口头约定的口径」变成机器可读的定义。这三样补齐了，Agent 的上限才能上来。

# 1 分钟回答

- 元数据补全：表/字段注释、业务含义、数据血缘、SLA、权限信息，缺失的要人工补齐
- 语义层建设：把指标公式、维度、关联关系、权限编码成机器可读定义，作为数仓和 Agent 之间的中间层
- 指标层治理：统一口径、收敛重复指标、明确版本，避免同名不同义
- 数据契约：明确粒度、分区、更新时效，让 Agent 知道能怎么用
- 查询边界：定义可下钻维度、可见明细范围、指标版本和数据更新时间

# 追问

- 语义层和数仓的指标字典是一回事吗？
- 元数据不全时 Agent 会出什么问题？
- AI-ready 改造的优先级怎么排？
