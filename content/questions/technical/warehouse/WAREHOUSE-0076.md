---
id: WAREHOUSE-0076
type: technical
question: 同一指标分布在多个模型，怎么保障一致性和融合
topic: [warehouse, metrics]
difficulty: 3
frequency: high
source_type: knowledge
---

# 一句话

统一口径 + 公共层收口计算 + 监控对账，把相似指标融合到公共 DWS。

# 30 秒回答

指标平台统一注册口径，公共层只算一次、下游引用，监控比对多个模型同名指标差异，逐步把烟囱式 ADS 迁移到公共 DWS。

# 追问

- 存量模型怎么渐进合并？
- 口径不一致怎么发现？
