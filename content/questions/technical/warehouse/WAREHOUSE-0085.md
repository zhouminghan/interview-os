---
id: WAREHOUSE-0085
type: technical
question: 高内聚低耦合在数仓模型设计怎么体现
topic: [warehouse, modeling]
difficulty: 3
frequency: medium
source_type: knowledge
---

# 一句话

高内聚：一个主题域内相关业务集中；低耦合：跨主题依赖少、公共维度独立维护。

# 30 秒回答

按主题域组织 DWD/DWS，域内聚合；公共维度放 DIM 独立维护，跨域通过 DIM 桥接，减少直接依赖。

# 追问

- 怎么判断一个域内聚？
- 跨域依赖怎么最小化？
